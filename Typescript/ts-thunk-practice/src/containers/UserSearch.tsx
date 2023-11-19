import React,{useEffect} from 'react';
import UserSearch from '../components/UserSearch';
import {useDispatch,useSelector} from 'react-redux';
import {githubThunk} from '../modules/github/thunks';
import { GitHubAction } from '../modules/github/types';
import {getUserProfile} from '../modules/github/actions';
import {getUserProfileAsync} from '../api/github';

function UserSearchContainer(){
    const dispatch= useDispatch();
   
    const onSearch=(username:string)=>{dispatch(githubThunk(username));};
    //console.log(GitHubAction);
    return(
        <UserSearch onSearch={onSearch}></UserSearch>
    );
}
export default UserSearchContainer;