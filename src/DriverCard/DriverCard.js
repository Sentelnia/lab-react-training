import React from 'react';
import './DriverCard.css';

function DriverCard(props){

let number = Math.round(props.rating)

let starFull='☆';
let starEmpty='★';

let starArr = [];

for (let i = 0 ; i < number ; i++){
    starArr.push(starEmpty)
}
for (let i = 0 ; i < (5-number) ; i++){
    starArr.push(starFull)
}



    return <div className='driverCard'>
        <div className='profilPic' style= {{backgroundImage : `url(${props.img})`}}/>
        <div className = 'textDriver'>
            <h2>{props.name}</h2>
            <p className = 'rateDriver'>{starArr}</p>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    </div>
}



export default DriverCard