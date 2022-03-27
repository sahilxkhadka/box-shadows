import React from "react";
import "./boxshadows.css"
import shadows from "../../data";
import Box from "../box/Box";

const BoxShadows = () => {
    return (
        <>
            <h1 className="app__heading">Css Box Shadows</h1>
            <div className="app__wrapper">
                {shadows.map((item, index) => 
                    <Box shadow = {item} key = {index} />
                )}
            </div>
        </>
    )
}

export default BoxShadows