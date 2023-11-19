import React,{useReducer} from 'react';
type Action={type:"INCREASE"}|{type:"DECREASE"};

function reducer(state: number,action: Action){
    switch(action.type){
        case 'INCREASE':
            return state+1;
        case 'DECREASE':
            return state-1;
    }
}


function Counter(){
    const [number,dispatch]=useReducer(reducer,0);

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={()=>{dispatch({type:"INCREASE"});}}>+1</button>
            <button onClick={()=>{dispatch({type:"DECREASE"});}}>-1</button>
        </div>
    );
}
export default Counter;