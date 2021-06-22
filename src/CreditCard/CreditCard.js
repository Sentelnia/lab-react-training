import React from 'react';
import './CeditCard.css';

function CreditCard(props){
    
    let CardLogo = {
        Visa : '',
        MasterCard: ''
    }
    

    return <div>

    {props.type}
    {props.number}
    
    </div>
    



    
        
        
   
}

export default CreditCard