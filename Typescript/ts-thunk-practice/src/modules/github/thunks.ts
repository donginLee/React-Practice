import { ThunkAction } from 'redux-thunk';
import {rootState} from '../index';
import {getUserProfile,getUserProfileSuccess,getUserProfileError} from './actions';
import { GET_USER_PROFILE,GET_USER_PROFILE_ERROR,GET_USER_PROFILE_SUCCESS } from './actions';
import { GitHubAction, GitHubState } from "./types";
import {AnyAction} from 'redux';
import {getUserProfileAsync} from '../../api/github';
export const githubThunk = (username:string):ThunkAction<void,GitHubState,null,GitHubAction>=>async dispatch=>{
        dispatch(getUserProfile(username));
        try{
            const data= await getUserProfileAsync(username);
            //console.log(data);
            dispatch(getUserProfileSuccess(data));}
        catch(e:any){
            dispatch(getUserProfileError());
        }

    
}
