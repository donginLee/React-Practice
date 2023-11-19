import React from 'react';
import PostContainer from '../containers/PostContainer';
import {useParams} from 'react-router-dom';
function PostPage (){
    const params=useParams();
    const id=parseInt(params.id,10);
    console.log(id);
    return (
        <PostContainer id={id}></PostContainer>
    );
}
export default PostPage;