import React,{useState ,useRef} from 'react';
function Input(){
    const [info,setInfo]=useState({name:"이동인",nickname:"Harper"});
    const nameInput = useRef();
    const onChange=(e)=>{
        
        setInfo({...info,[e.target.name]:e.target.value});
    }
    const onReset=()=>{
        setInfo({name:"",nickname:""});
        nameInput.current.focus();
    }
    const {name,nickname}=info;
    return(
        <>
        <input onChange={onChange} name="name" value={name} ref={nameInput}></input>
        <input onChange={onChange} name="nickname" value={nickname}></input>
        <button type="reset" onClick={onReset}>초기화</button>
        <h1>값: {name}({nickname})</h1>
        </>
    );
}
export default Input;