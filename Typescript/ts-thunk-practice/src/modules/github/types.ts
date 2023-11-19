import {getUserProfile,getUserProfileSuccess,getUserProfileError} from './actions';
import { GET_USER_PROFILE,GET_USER_PROFILE_ERROR,GET_USER_PROFILE_SUCCESS } from './actions';
import { AnyAction } from 'redux';
import { GithubProfile } from '../../api/github';
export type GitHubState={loading: boolean,data:GithubProfile|null,error:boolean};
export type GitHubAction =ReturnType <typeof getUserProfile>| ReturnType<typeof getUserProfileError>| ReturnType <typeof getUserProfileSuccess>;