import React from 'react';
import './Rating.css';



function Rating(props){
let number = Math.round(props.children)

let starFull='☆';
let starEmpty='★';

let starArr = [];

for (let i = 0 ; i < number ; i++){
    starArr.push(starEmpty)
}
for (let i = 0 ; i < (5-number) ; i++){
    starArr.push(starFull)
}

return <div className ='rate'>
    {starArr}
</div>
}


export default Rating