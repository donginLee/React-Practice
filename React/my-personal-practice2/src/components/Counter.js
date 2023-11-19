import React from 'react';

function Counter({number,diff,onIncrease,onDecrease,onSetDiff}){
    return(
        <>
            1
            <h1>{number}</h1>
            <input value={diff} onChange={e=>{onSetDiff(parseInt(e.target.value,10))}}></input>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </>
    );
}
export default Counter;