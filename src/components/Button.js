import React from 'react'

const Button = (props) => {
    return <button type="button" onClick = {props.OnClick} style={{color:"#fff",padding:"5px", fontSize:"20px",margin:"5px",cursor:"pointer",borderRadius:"5px",border:"none",backgroundColor:`${props.bground}`}}>
        {props.children}
    </button>
}

export default Button
