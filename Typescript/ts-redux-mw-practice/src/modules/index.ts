import github from './github';
import {combineReducers} from 'redux';
import { GithubProfileState } from './github';
const rootReducer = github;
//combineReducers({github});

export default rootReducer;
export type rootState = ReturnType<typeof rootReducer>;