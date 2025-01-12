import { useState } from "react"

export default function Ludoboard(){

    // I have understand that how to pass object in usestate and how to use it in setMoves
    let[moves,setMoves]=useState({blue:0,red:0,yellow:0,aqua:0,});
    let [arr,setArray]=useState(["no moves yet"]);
    let updateBlue=()=>{
    //     console.log(`moves.blue=${moves.blue}`);
    //     setMoves((prevmoves)=>{
    //    return { ...prevmoves,blue:prevmoves.blue+1}
                         
    //     })
       
        // setArray([...arr]);
        // console.log(arr);
     setArray((prevarray)=>{
       return [...prevarray,"Blue moves"];
     });
       console.log(arr);
    }

    let updateRed=()=>{
        console.log(`moves.red=${moves.red}`);
        setMoves((prevmoves)=>{
       return { ...prevmoves,red:prevmoves.red+1}
          
        })

    }

    let updateYellow=()=>{
        setMoves((prevmoves)=>{
            return{...prevmoves,yellow:prevmoves.yellow+1};
        })
    }
   
   let updateAqua=()=>{
    setMoves((prevmoves)=>{
           return{...prevmoves,aqua:prevmoves.aqua+1};
    })
   }



    return (
        <div>
       <p>Game Begins</p>
       <p>{arr}</p>
       <h5 style={{color:"blue"}} >Blue moves:{moves.blue}</h5>
       <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
       <h5 style={{color:"red"}}>red moves:{moves.red}</h5>
       <button onClick={updateRed}  style={{backgroundColor:"red"}}>+1</button>
       <h5 style={{color:"yellow"}}>yellow moves:{moves.yellow}</h5>
       <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
       <h5 style={{color:"aqua"}}>maroon moves:{moves.aqua}</h5>
       <button onClick={updateAqua} style={{backgroundColor:"aqua"}}>+1</button>
       </div>
    )
}