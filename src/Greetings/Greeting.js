import React from 'react';
import './Greeting.css';


function Greeting(props){
    let text='';
    switch(props.lang){
        case 'de':
            text = 'Hallo'
            break;
        case 'en':
            text = 'Hello'
            break;
        case 'es':
            text = 'Buenos dias'
            break;
        case 'fr':
            text = 'Bonjour'
            break;
        default:
            text = 'Hello'
    }
        
    return (
        <p>{text} {props.children}</p>
    )
}


export default Greeting