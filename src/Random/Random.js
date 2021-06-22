import React from 'react';
import './Random.css';


function Random(props){
    return (
        <div>
            Random value between {props.min} and {props.max} = {randomNumber(props.max, props.min)}
        </div>
    )

}

function randomNumber(max, min){
   return Math.trunc(Math.random()* (max - min) + min)
}

export default Random