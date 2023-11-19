import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
const StyledLink=styled(Link)`
    display:block
`;
function PostList({posts}){
    
    return(
        <ul>
            {posts.map(post => <StyledLink to={`/${post.id}`} key={post.id}>{post.title}</StyledLink>)}
        </ul>
   
    );
}

export default PostList;