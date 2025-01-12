import { useState } from "react";
export default function Count(){


    function init(){
        console.log("init was executed");
        return (Math.random());
        
    }


   let[count,setCount]=useState(init);
    let inccount=()=>{
        setCount((prevCount)=>{
           return (prevCount+1);
        });  // set count is used to increment on UI with change in console
        setCount((prevCount)=>{
           return (prevCount+100);
        });  // set count is used to increment on UI with change in console
        console.log("The component has been rendered")

    }
    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={inccount}>Increment By one</button>
        </div>
    )
}
