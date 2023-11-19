import { GET_USER_PROFILE,GET_USER_PROFILE_ERROR,GET_USER_PROFILE_SUCCESS } from "./actions";
import {GitHubState,GitHubAction} from './types';
const initialState={
loading:false,
data:null,
error:false
};
export default function github(state: GitHubState=initialState ,action:GitHubAction){
    switch(action.type){
        case GET_USER_PROFILE:
            return {
                loading:true,
                data:state.data,
                error:false
            };
        case GET_USER_PROFILE_SUCCESS:
            return {
                loading:false,
                data:action.payload,
                error:false
            };
        case GET_USER_PROFILE_ERROR:
            return {
                loading:false,
                data:null,
                error:true
            };
        default:
            return state;
    }
}