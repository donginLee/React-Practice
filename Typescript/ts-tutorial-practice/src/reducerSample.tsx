import React,{useReducer} from 'react';
import {useSampleState, useSampleDispatch} from './SampleContext';
type Color='red'|'orange'|'yellow';
type State={
    count: number,
    text: string,
    color: Color,
    isGood: boolean
};
type Action={type:'SET_COUNT',count:number}
            |{type:'SET_TEXT', text:string}
            |{type:'SET_COLOR', color:Color}
            |{type:'SET_ISGOOD'};
function reducer(state:State,action:Action):State{

    switch(action.type){
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count
            };
        case 'SET_TEXT':
            return {
                ...state,
                text:action.text
            };
        case 'SET_COLOR':
            return{
                ...state,
                color:action.color
            };
        case 'SET_ISGOOD':
            return{
                ...state,
                isGood: !state.isGood
            };
            
    }
};
function ReducerSample(){
    const state=useSampleState();
    const dispatch= useSampleDispatch();

    const setCount=()=>{dispatch({type:'SET_COUNT',count:5})};
    const setText=()=>{dispatch({type:'SET_TEXT', text:"BYE" });}
    const setColor=()=>{dispatch({type:'SET_COLOR', color:"yellow"});}
    const setGood=()=>{dispatch({type:'TOGGLE_GOOD'});}
    
    return(
        <div>
            <div>
                <code>count: </code>{state.count}
            </div>
            <div>
                <code>text: </code>{state.text}
            </div>
            <div>
                <code>color: </code>{state.color}; 
            </div>
                <code>isGood: </code>{state.isGood?'true':'false'} 
            <div>
                <button onClick={setCount}>
                SET_COUNT
                </button>
                <button onClick={setText}>
                SET_TEXT
                </button>
                <button onClick={setColor}>
                SET_COLOR    
                </button>
                <button onClick={setGood}>
                TOGGLE_GOOD
                </button>
            </div>
        </div>
    );
}
export default ReducerSample;