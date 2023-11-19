import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import UserSearch from '../components/UserSearch';
import {getUserProfileThunk}from '../modules/github';
import { GithubProfileAction } from '../modules/github';
import {getUserProfile,getUserProfileSuccess,getUserProfileError} from '../modules/github/actions'
function UserSearchContainer(){
    const dispatch = useDispatch();

    const onSearch=(username:string)=>{
       dispatch(getUserProfile());
      // console.log(typeof getUserProfile("읻동인"));
};
    return(
        <>
            <UserSearch onSearch={onSearch}></UserSearch>
        </>
    );
}
export default UserSearchContainer;