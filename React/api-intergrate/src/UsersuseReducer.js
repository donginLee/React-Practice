import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

function reducer(state,action){
  switch(action.type){
    case 'LOADING':
      return{
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return{
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR':
      return{
        loading: false,
        data: null,
        error: action.error
      };
      default:
        throw new Error('Unhandled action type: ${action.type}');
  }
 
}
function UsersuseReducer(){
  const [state,dispatch] = useReducer(reducer,{loading:null,data:null,error:null});

  const fetchUsers= async()=>{
    dispatch({type: 'LOADING'});
    try{const response = await axios.get('https://jsonplaceholder.typicode.com/users');dispatch({type:'SUCCESS',data: response.data});}
    
    catch(e){dispatch({type:'ERROR',error:e});}
    
  }

  useEffect(()=>{fetchUsers();},[]);
  
  const {loading:l,data:users,error:e}=state;

  if(l) return <div>롤롤로롤로딩중입니다..</div>;
  if(e) return <div> {e} 이런 에러가 떴습니ㅏㄷ..</div>;
  if(!users) return <div>아무도 안쓰는 서비스</div>;
  return (
    <>
      <ul>
          {users.map(user=>(<li key={user.id}>
            {user.username}({user.name})
          </li>))}
      </ul>
      <button onClick={fetchUsers}>유저변화보기</button>
    </>
  );
  
}

  export default UsersuseReducer;

  