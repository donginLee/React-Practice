import React,{useState} from 'react';

type UserSearchProps={
    onSearch:(un:string)=>void;
};
function UserSearch({onSearch}:UserSearchProps){
    const [username,setUsername]=useState('');
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value);
    };
    const onSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSearch(username);
        setUsername('');
    }
    return(
        <>
            <form onSubmit={onSubmit}>
                <input type="text" value={username} onChange={onChange}/>
                <button type="submit">
                    조회 
                </button>
            </form>
        </>
    );
}
export default UserSearch;