import { getUserProfileSuccess,getUserProfileError,getUserProfile } from "./actions";
import {getUserProfileAsync} from '../../api/github'
import { GithubProfileAction } from "./types";
import { GitHubProfile } from "../../api/github";
import {rootState} from '../index';
import { ThunkAction } from "redux-thunk";

export function getUserProfileThunk(username:string):ThunkAction<void, rootState, null, GithubProfileAction>{
    return async dispatch => {
            dispatch(getUserProfile(username));
            try{
                const data=await getUserProfileAsync(username);
                dispatch(getUserProfile(username));
            }
            catch(e:any){
                dispatch(getUserProfileError(e.message));
            }            
};};