import React from 'react';
import CounterContainer from '../containers/CounterContainer';
import PostListContainer from '../containers/PostListContainer';
function HomePage(){
    return(
        <>
            <CounterContainer></CounterContainer>
            <hr></hr>
            <PostListContainer></PostListContainer>
        </>
    );
}
export default HomePage;