import {useState}from 'react';
import "./main .css"
function Main(){
    let [d,setd]=useState("")
    let a,b,c;
    function handlechange(event){
         a=event.target.value;
    }
    function handlechange1(event){
         b=event.target.value;
   
    }
    function handlechange2(event){
         c=event.target.value;
    }
    function clicked(){
        d=(a*b*c)/100
        setd(d);
    }

    return(
        <div className="abc">
    <input type="number"placeholder="Enter amount" onChange={handlechange}></input>
    <input type="number"placeholder="Enter Rate of Interest" onChange={handlechange1}></input>
    <input type="number"placeholder="Enter Number of years"onChange={handlechange2}></input>
<button onClick={clicked}>calculate</button>
<h1>Total Interest is:{d}</h1>
    </div>
    );                    
}
export default Main;