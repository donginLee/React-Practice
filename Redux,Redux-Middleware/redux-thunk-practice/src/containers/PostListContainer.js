import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import PostList from '../components/PostList';
import {getPosts} from '../modules/posts';
function PostListContainer(){

    const {loading,data,error}=useSelector(state=>state.posts.posts);
    const dispatch=useDispatch();

    useEffect(()=>{ dispatch(getPosts())},[dispatch]);

    if(loading && !data) return <div>로딩중...</div>
    if(error) return <div>에러로 인하여 게시글을 불러오지 못하였습니다.</div>
    if(!data) return null;
    return(
        <PostList posts={data}></PostList>
    );
}
export default PostListContainer;
