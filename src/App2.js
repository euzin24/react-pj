import React, {useState} from 'react';
import './App2.css';
import Home from './components2/Home';
import About from './components2/About';
import { Route, Link } from 'react-router-dom';

function App(){
  console.log("App2 rendered");

  //destructing
  let [arr, modArr]=useState({
    title:'useState',
    sub:'Use state with useState()'
    });

  return (
    <div className="App">
        <nav className="black-nav">React Routing</nav>
        <div className="list">
          <h3>{arr.title}</h3>
          <p>{arr.sub}</p>
          <hr></hr>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About}/>
        </div>
        
    </div>
  );
}
export default App;
