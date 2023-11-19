import React, {useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getPosts} from '../modules/posts';
import PostList from '../components/PostList';
function PostListContainer(){
    const dispatch = useDispatch();
    
    
 
    //console.log(getPosts);
    const {loading,data,error}=useSelector(state=>state.posts.posts);
    useEffect(()=>{dispatch(getPosts())},[dispatch]);
    if(loading&&!data)return(<>로딩중</>);
    if(error)return(<>에러 발생</>);
    if(data) return(
        <PostList posts={data}></PostList>
    );
    else return (<></>);
}
export default PostListContainer;