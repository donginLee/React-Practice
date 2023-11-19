import { GithubProfileState, GithubProfileAction } from "./types";
import {GET_USER_PROFILE,GET_USER_PROFILE_SUCCESS,GET_USER_PROFILE_ERROR} from './actions';
const initialState={
    loading:false,
    data:null,
    error:false
};
function github(state:GithubProfileState=initialState,action:GithubProfileAction){
    switch(action.type){
        case GET_USER_PROFILE:
            return{
                loading:true,
                data:state.data,
                error:false
            };

        case GET_USER_PROFILE_SUCCESS:
            return{
                loading:false,
                data:action.payload,
                error:false
            };
        
        case GET_USER_PROFILE_ERROR:
            return{
                loading:false,
                data:null,
                error:true
            };
        default: return state;
    }
}
export default github;