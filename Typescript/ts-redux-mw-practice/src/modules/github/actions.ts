import {userProfileType} from './types';
import { GitHubProfile } from '../../api/github';

export const GET_USER_PROFILE='github/GET_USER_PROFILE' as const;
export const GET_USER_PROFILE_SUCCESS='github/GET_USER_PROFILE_SUCCESS' as const;
export const GET_USER_PROFILE_ERROR='github/GET_USER_PROFILE_ERROR' as const;

export const getUserProfile=(name:string)=>({type:GET_USER_PROFILE, payload:name});
export const getUserProfileSuccess=(data:GitHubProfile)=>({type:GET_USER_PROFILE_SUCCESS,payload:data});
export const getUserProfileError=(error: string)=>({type:GET_USER_PROFILE_ERROR,payload:error});
