import React from 'react';
import {useDispatch,useSelector}from 'react-redux';
import Userlist from '../components/Userlist';
import {enroll,userDelete} from '../reducer';
function UserlistContainer(){
    const dispatch=useDispatch();
    const data=useSelector(state=>state);
    const onEnroll= info=>{dispatch(enroll(info))};
    const onDelete=id=>{dispatch(userDelete(id))};
 return(
    <Userlist onEnroll={onEnroll} onDelete={onDelete} data={data}></Userlist>
 );
}
export default UserlistContainer;