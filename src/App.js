import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let listy = [{ques : "What's your opinion regarding Abu Hanifa?", photo : "nature.jpg", options: [{op: "No", key: 0}, {op: "Yes", key: 1}, {op: "Maybe", key: 2}, {op: "I don't know", key: 3}]},
  {ques : "Mohammed bin Shamseldeen or Iyad Qunaibi?", photo : "nature.jpg", options: [{op:"Mo's king", key: 0}, {op:"Iyad Goat", key: 1}, {op:"I am Ashari", key: 2}, {op:"Both (I suffer from shizofrenia)", key: 3}]}
];
const [current, setCurrent] = useState(0);
return (
    <div className= "home"> 
    <h3 className='head'>
      Welcome to the G1 practice test Ontario     
    </h3>
    <img className='photo' src ={listy[current].photo} width={300}></img>
    <div className='question'>{listy[current].ques}</div>
    <div className='answers'>
         {listy[current].options.map((pkg) => (
          <div className='answer' key={pkg.key}>
    <input type="radio" name="yesorno" className='answer'/> {pkg.op} </div>))}

    </div>
    <div className='buttons'>
      <button className='back-button' onClick={() => setCurrent(current - 1)}>Back</button>
      <button className='next-button' onClick={() => setCurrent(current + 1)}>Next</button>
    </div>
    </div>
 );
}

export default App;






