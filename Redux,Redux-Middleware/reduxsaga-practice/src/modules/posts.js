import * as postsAPI from '../api/posts';

const GET_POST="GET_POST";
const GET_POST_SUCCESS="GET_POST_SUCCESS";
const GET_POST_ERROR="GET_POST_ERROR";

const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

export const getPosts = () => async dispatch => {
  dispatch({ type: 'GET_POSTS' });
  try {
    const posts = await postsAPI.getPosts();
    dispatch({ type: 'GET_POSTS_SUCCESS', data: posts});
  } catch (e) {
    dispatch({ type: 'GET_POSTS_ERROR', data: e });
  }
};
export const getPost= id =>async dispatch =>{
    dispatch({type:'GET_POST', id});
    try{
        const post= await postsAPI.getPost(id);
        dispatch({type:'GET_POST_SUCCESS',data:post,id:id});
    }
    catch(e){
        dispatch({type:'GET_POST_ERROR',data:e,id:id});
    }

};

const initialState={
    posts:{
        loading:false,
        data:null,
        error:null
    },
    post:{}
};
export default function posts(state=initialState,action){
    switch(action.type){
        case GET_POSTS:
        return{
            ...state,
            posts:{
                loading:true,
                data:state.posts.data,
                error:null,
            }
        };

        case GET_POSTS_SUCCESS:
        return{
            ...state,
            posts:{
                loading:false,
                data:action.data,
                error:null
            }
        };

        case GET_POSTS_ERROR:
        return{
            ...state,
            posts:{
                loading:false,
                data:null,
                error:action.data
            }
        }

        case GET_POST:
        return{
            ...state,
            post:{
                ...state.post,
                [action.id]:{
                    loading:true,
                    data:state.post[action.id]?state.post[action.id].data:null,
                    error:null
                }
            }
        };

        case GET_POST_SUCCESS:
            return{
                ...state,
                post:{
                    ...state.post,
                    [action.id]:{
                        loading:false,
                        data:action.data,
                        error:null
                    }
                }
            };

        case GET_POST_ERROR:
            return{
                ...state.post,
                post:{
                    ...state,
                    [action.id]:{
                        loading:false,
                        data:null,
                        error:action.data
                    }
                }
            };
        default:
            return state;

    }
};