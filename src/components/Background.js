import React,{useState} from 'react'
import Timer from './Timer';
const Background = () => {

    const colors = ["#fff","red","green","#f2f2f2","#3333","#f4f4f4","#eeee"];
    const [colorIndex,setColorIndex] = useState(0);

    const bgChangeToggler = (index) => {
   
        setColorIndex(index);
    }
    const mystyle = {
        height: "100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: `${colors[colorIndex]}`
    }
    return (
        <div style={mystyle}>
            <Timer changeBG= {bgChangeToggler} />

        </div>
    )
}



export default Background
