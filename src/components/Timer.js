import React,{useState,useEffect} from 'react';
import Button from './Button';
const Timer = ({changeBG}) => {
    
   
    let [counter,setCounter] = useState(0);
    const [myIntervalID , setIntervalID] = useState(0);

    useEffect(()=>{
      
        if(counter % 10 === 0){
       
        changeBG(Math.floor(Math.random() * 6) + 1)
        }
    },[counter,changeBG]);



    const startTimer =()=> {
     let intervalID = setInterval(()=>{
         setCounter(counter++);
     },1000);
        setIntervalID(intervalID);
    }

    const StopTimer = () => {
        console.log(myIntervalID);
        clearInterval(myIntervalID);
    }
    return (
        <div style={{border: "1px solid green", padding:"10px" ,width:"50%",display:"flex",flexDirection:"column" ,alignItems:"center"}}>
            <h1 style={{fontSize :"80px",marginBottom:"10px"}}>{counter} Sec</h1>
            <div>
            <Button OnClick={startTimer} bground = "#5cb85c">START</Button>
            <Button OnClick = {StopTimer} bground = "#d9534f">STOP</Button>
            </div>
        </div>
    )
}

export default Timer
