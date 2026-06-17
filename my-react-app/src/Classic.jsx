import { useState } from "react";
import App from "./App.jsx";
function Fire(){
    const [name,getName]=useState("");
    return(
        <>
        <label >
            Name:<input type="text" onChange={
                (e)=>getName(e.target.value)}/>
        </label>
        <h1>{name}</h1>
        </>
    );
}
function Master(){
    const [sample , setName]=useState("Ammu");
    return(
        <>
        <h1>{sample}</h1>
        <button
        style={{width:"fit-content"}}
        onDoubleClick={()=>setName("Journey")}>
        Rename
        </button>
        </>
    );
}
function Classic(){
    
    /*const [count,setCount]=useState(0);
    return(
        <>
        <h1>Count:{count}</h1>
        <div style={{display:"flex",gap:"10px"}}>
        <button
        style={{width:"fit-content"}}
        onClick={()=>setCount(count+1)}>
            count+
        </button>
        <button
        style={{width:"fit-content"}}
        onClick={()=>setCount(count-1)}>
            count-
        </button>
        </div>*/
    const [show,setshow]=useState(false);
    return(
        <>
        <button
        onClick={()=>setshow(!show)}>Bird</button>
        {show && <App></App>}
        </>
    );
}
export default Classic;