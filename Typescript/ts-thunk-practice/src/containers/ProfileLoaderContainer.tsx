import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { rootState } from '../modules';
import ProfileLoader from '../components/ProfileLoader';
function ProfileLoaderContainer(){
    const {loading,data,error}=useSelector((state:rootState)=>state.github);

    return(
        <>
            <ProfileLoader loading={loading} data={data} error={error} />
        </>
    );
}
export default ProfileLoaderContainer;