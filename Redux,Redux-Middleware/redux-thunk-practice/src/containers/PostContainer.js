import React,{useEffect} from 'react';
import Post from '../components/Post';
import {getPost} from '../modules/posts';
import {useSelector,useDispatch} from 'react-redux';
function PostContainer({postId}){
    const IDdata=useSelector(state=>state.posts.post[postId]);
    console.log(IDdata);
    const {loading,data,error} = IDdata?IDdata:{loading:true,data:null,error:null};
    const dispatch= useDispatch();
    useEffect(()=>{dispatch(getPost(postId))},[postId,dispatch]);
    if(loading && !data) {console.log();return(<div>로딩 중</div>);}
    if(error) return(<div>에러로 인하여 게시글을 불러오지 못했습니다.</div>);
    if(!data){console.log(loading,data,error); return(<>kj</>);}
    return(
        
        <Post post={data}></Post>
    );
}
export default PostContainer;