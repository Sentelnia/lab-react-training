import React from 'react';
import './BoxColor.css';

function BoxColor(props){
    return (
        <div className ='box' style={{ backgroundColor : `rgb( ${props.r}, ${props.g}, ${props.b})` }} >rgb({props.r},{props.g},{props.b})</div>
    )
}


export default BoxColor;