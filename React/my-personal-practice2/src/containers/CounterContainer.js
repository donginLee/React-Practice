import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch} from 'react-redux';
import {increase,decrease,setDiff} from '../modules/counter';
function CounterContainer(){
    const num=useSelector(state=>state.number);
    const dif=useSelector(state=>state.diff);
    console.log(num,dif);
    const dispatch=useDispatch();
    
    const onIncrease=()=>(dispatch(increase()));
    const onDecrease=()=>(dispatch(decrease()));
    const onSetDiff=(diff)=>(dispatch(setDiff(diff)));
    return(
        <>
           <Counter 
            number={num}
            diff={dif}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}/>
        </>
    );
}
export default CounterContainer;
//<Counter number={num} diff={dif} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff}></Counter>