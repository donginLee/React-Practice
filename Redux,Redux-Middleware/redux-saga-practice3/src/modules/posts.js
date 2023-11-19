import * as postsAPI from '../api/posts';
import {call,put,takeEvery} from 'redux-saga/effects';

const GET_POSTS='GET_POSTS';
const GET_POSTS_SUCCESS='GET_POSTS_SUCCESS';
const GET_POSTS_ERROR='GET_POSTS_ERROR';

const GET_POST='GET_POST';
const GET_POST_SUCCESS='GET_POST_SUCCESS';
const GET_POST_ERROR='GET_POST_ERROR';

export const getPosts=()=>({type:GET_POSTS});
export const getPost=id=>({type:GET_POST,payload:id, meta:id});

function* getPostsSaga() {
    try {
      const posts = yield call(postsAPI.getPosts); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
      console.log(posts);
      yield put({
        type: GET_POSTS_SUCCESS,
        payload: posts
      }); // 성공 액션 디스패치
    } catch (e) {
      yield put({
        type: GET_POSTS_ERROR,
        payload: e
      }); // 실패 액션 디스패치
    }
  }

function* getPostSaga(action) {
    const param = action.payload;
    const id = action.meta;
    try {
        const post = yield call(postsAPI.getPost, param); // API 함수에 넣어주고 싶은 인자는 call 함수의 두번째 인자부터 순서대로 넣어주면 됩니다.
        yield put({
            type: GET_POST_SUCCESS,
            payload: post,
            meta: id
        });
    }catch (e) {
        yield put({
            type: GET_POST_ERROR,
            payload: e,
            meta: id
        });
    }
}
export function* postsSaga() {
    yield takeEvery(GET_POSTS, getPostsSaga);
    yield takeEvery(GET_POST, getPostSaga);
}
const initialState={
    posts:{
        loading:false,
        data:null,
        error:null
    },
    post:{
    }
};

export default function posts(state=initialState,action){
    switch(action.type){
        case GET_POSTS:
            return {...state,
                posts:{
                    loading:true,
                    data:state.posts.data,
                    error:null
                }
            };
        case GET_POSTS_SUCCESS:
            return {...state,
                posts:{
                    loading:false,
                    data:action.payload,
                    error:null
                }       
            };
        case GET_POSTS_ERROR:
            return {...state,
                posts:{
                    loading:false,
                    data:null,
                    error:action.payload
                }           
            };
        case GET_POST:
            return {...state,
                post:{
                    ...state.post,
                    [action.meta]:{
                        loading:true,
                        data:state.post[action.meta]?state.post[action.meta].data:null,
                        error:null          
                    }
                }
            };
        case GET_POST_SUCCESS:
            return {...state,
                post:{
                    ...state.post,
                    [action.meta]:{
                        loading:false,
                        data:action.payload,
                        error:null                        
                    }
                }
            };
        case GET_POST_ERROR:
            return {...state,
                post:{
                    ...state.post,
                    [action.meta]:{
                        loading:false,
                        data:null,
                        error:action.payload
                    }
                }            
            };
        default:
            return state;
    }
}