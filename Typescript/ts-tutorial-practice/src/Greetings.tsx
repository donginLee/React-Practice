import React from 'react';
type GreetingsProps={
    name:string;
    mark:string;
    optional?:string;
    onClick:(name:string) =>void;
};
function Greetings({name,mark,optional,onClick}:GreetingsProps){
    return(
        <div>
            Hello,{name} {mark}
            {optional && <p>{optional}</p>}
            <button onClick={()=>{onClick(name)}}>ClickMe</button>
        </div>
    );
}
export default Greetings;