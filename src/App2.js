import React, {useState} from 'react';
import './App2.css';
import Home from './components2/Home';
import About from './components2/About';
import { Route } from 'react-router-dom';

function App(){
  console.log("App2 rendered");

  //destructing
  let [arr, changeArr]=useState({
    title:'useState',
    sub:'Use state with useState() by destructing'
    });
 
    // useState로 만든 state 내 여러 value가 들어있다면
  // 그냥 modArr함수를 쓸 수 없고,..?
  
  return (
    <div className="App">
        <nav className="black-nav">ES6 & React Routing</nav>
        <div className="list">
          <h3>{arr.title}</h3>
          <p>{arr.sub}</p>
          <button onClick={()=>changeArr({
            title:'changeArr', sub:'the function which can set States returned by useState method secondly'})}>setState</button>
          <hr></hr>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About}/>
        </div>
        
    </div>
  );
}
export default App;
