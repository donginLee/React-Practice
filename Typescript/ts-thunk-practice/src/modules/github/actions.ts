import { GithubProfile } from "../../api/github";
export const GET_USER_PROFILE = 'github/GET_USER_PROFILE' as const ;
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS' as const;
export const GET_USER_PROFILE_ERROR='github/GET_USER_PROFILE_ERROR' as const ;

export function getUserProfile(name:string){
    return{
        type:GET_USER_PROFILE,
        payload:name
    };
};
export function getUserProfileSuccess(data:GithubProfile){
    return {
        type:GET_USER_PROFILE_SUCCESS,
        payload:data
    };
};
export function getUserProfileError(){
    return{
        type:GET_USER_PROFILE_ERROR
    };
};


