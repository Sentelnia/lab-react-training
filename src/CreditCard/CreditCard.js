import React from 'react';
import './CreditCard.css';

function CreditCard(props){

    //logo credit card
    let logo;
    if(props.type === 'Visa'){
        logo = '/img/visa.png'
    } 
    if(props.type === 'Master Card'){
        logo = '/img/mastercard.png'
    }

    //4 dernier chiffres
    let number = props.number.substr(-4)

    //date d'expiration
    let month = props.expirationMonth
    let year = props.expirationYear.toString().substr(-2);

    if(month < 10){
        month = '0'+ month
    }



    return <div className='card' style={{ backgroundColor : `${props.bgColor}`, color : `${props.color}`}}>

    <img className ='logoCard' src={logo} alt='logo card'/>
    <p className='cardNum'><span className='secret'>.... .... .... </span>{number}</p>
    <p className='info'>
        <span className='expireNum'>Expires {month}/{year} </span>
        <span className='bank'>{props.bank}</span>
    </p>
    <p className='owner'>{props.owner}</p>
    
    </div>
    



    
        
        
   
}

export default CreditCard