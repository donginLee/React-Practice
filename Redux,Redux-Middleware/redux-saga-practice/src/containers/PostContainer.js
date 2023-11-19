import React,{useEffect} from 'react';
import Post from '../components/Post';
import {useSelector,useDispatch} from 'react-redux';
import {getPost} from '../modules/posts';
function PostContainer({id}) {
    const dispatch=useDispatch();
    useEffect(()=>{dispatch(getPost(id));},[dispatch,id]);
    const {loading,data,error}=useSelector(state=>state.posts.post[id])||{loading:true,data:null,error:null};
    if(loading&&!data)return(<div>게시글을 불러오는 중</div>);
    if(error)return(<div>에러로 인해 게시글을 불러오지 못했습니다.</div>);
    if(data)return <Post post={data} />
}
export default PostContainer;