import {combineReducers} from 'redux';
import github from './github';
export const rootReducer=combineReducers({github});
export type rootState=ReturnType<typeof rootReducer>;
