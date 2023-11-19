import React,{useState,useRef} from 'react';

function CreateUser({onEnroll}){
    const nextId=useRef(4);
            const [info,setInfo]=useState({name:'',email:''});
            const onChange=(e)=>{
                setInfo({...info,[e.target.name]:e.target.value});
                
            } 
    return(
        <>
            <input name="name" placeholder="이름" value={info.name} onChange={onChange}></input>
            <input name="email" placeholder="이메일" value={info.email} onChange={onChange}></input>
            <button onClick={()=>{onEnroll({id:nextId.current,name:info.name,email:info.email});console.log(nextId,nextId.current);nextId.current++;setInfo({name:'',email:''})}}>등록</button>
        </>
    );
}
function User({user,onDelete}){
    const style1={
        color:'red'
    };
    const style2={
        color:'blue'
    };
    return(
        <div onClick={()=>{onDelete(user.id)}} style={user.id%2===0?style1:style2}>
            {user.name}({user.email});
        </div>

    );
}
function Users({users,onDelete}){
    return(
        users.map(user => <User key={user.id} user={user} onDelete={onDelete}>{user.name}:({user.email})</User>)
    );
}
function Userlist({data,onEnroll,onDelete}){
    return(
        <>
            <CreateUser onEnroll={onEnroll}></CreateUser>
            <Users onDelete={onDelete} users={data.users}></Users>
        </>
    );
}

export default Userlist;