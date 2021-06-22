import React from 'react';

import './App.css';

import IdCard from './IdCard/IdCard';
import Greetings from './Greetings/Greeting';
import Random from './Random/Random';



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
  <Greetings lang='de' children='Sisu'/>
  <Greetings lang='en' children='Pikachu'/>
  <Greetings lang='es' children='Dva'/>
  <Greetings lang='fr' children='Zelda'/>
</LangageList>

<Random min={1} max={6}/>
<Random min={6} max={100}/>
    </div>
  );
}

export default App;
