import React from 'react';
import { GitHubState } from '../modules/github';
import { GithubProfile } from '../api/github';
type ProfileLoaderProps=GitHubState;
function ProfileLoader({loading,data,error}:ProfileLoaderProps){
    if(loading) return(
        <>
            로딩중
        </>
    )
    if(data) return(
        <>
            <h1>{data.name}</h1>
            <p>{data.bio}</p>
            <img src={data.avatar_url}></img>
        </>
    )
    if(error) return(
        <>
            <p>에러로 인해 불러오지 못하였습니다.</p>
        </>
    )
    else return(
        <>
            <p>조회를 원하시는 닉네임을 검색해보세요.</p>
        </>
    );
}
export default ProfileLoader;