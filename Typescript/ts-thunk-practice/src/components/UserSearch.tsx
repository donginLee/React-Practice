import React,{useState} from 'react';
type UserSearchProps={
    onSearch: (username:string)=>void;
};

function UserSearch({onSearch}:UserSearchProps){
    const [username,setUsername]=useState('');
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value);
    }
    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{onSearch(username);setUsername('');e.preventDefault();};
    return(
        <>
            <form onSubmit={onSubmit}>
                <input  value={username} onChange={onChange}></input>
                <button type="submit">조회</button>
            </form>
        </>
    );
}
export default UserSearch;