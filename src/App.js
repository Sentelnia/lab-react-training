import React from 'react';

import './App.css';

import IdCard from './IdCard/IdCard';
import Greetings from './Greetings/Greeting';
import Random from './Random/Random';
import BoxColor from './BoxColor/BoxColor';



function LangageList(props){
  return <div>{props.children}</div>
}

function App() {
  return (
    <div className="App">
      <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<LangageList>
  <Greetings lang='de'>Sisu</Greetings> 
  <Greetings lang='en'>Pikachu</Greetings>
  <Greetings lang='es'>Zelda</Greetings>
  <Greetings lang='fr'>Dva</Greetings>
</LangageList>

<Random min={1} max={6}/>
<Random min={6} max={100}/>

<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
    </div>
  );
}

export default App;
