import {GitHubProfile} from '../../api/github';
import { GET_USER_PROFILE,GET_USER_PROFILE_ERROR,GET_USER_PROFILE_SUCCESS } from './actions';
import {getUserProfile,getUserProfileSuccess,getUserProfileError} from './actions';
export type userProfileType = GitHubProfile;
export type GithubProfileState={
    loading:boolean;
    data:GitHubProfile|null;
    error: boolean;
};
export type GithubProfileAction=
   |ReturnType<typeof getUserProfile>
   |ReturnType<typeof getUserProfileSuccess>
   |ReturnType<typeof getUserProfileError>;

