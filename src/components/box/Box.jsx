import React, { useState } from "react";
import "./box.css"

const Box = ({shadow}) => {
    const [overlay, setOverlay] = useState(false)
    const boxStyles = {
        flex: "25%",
        height: 360,
        boxShadow: shadow
    }
    const handleClick = () => {
       navigator.clipboard.writeText(`box-shadow: ${shadow};`)
       alert("Copied!!")
    }
    return (
        <>
            <div 
                style = {boxStyles}    
                className="box__container">
                <button 
                    className="glow-on-hover"
                    onClick={handleClick}
                >Copy Css</button>
            </div>
        </>
    )
}

export default Box