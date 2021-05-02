import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App2.css';
import Home from './components2/Home';
import About from './components2/About';
import Contact from './components2/Contact';
import Param from './components2/Param';
import data from './components2/data.json'

function NotFound(){
  return <div>NOT FOUND</div>
}

function App(){  
    //destructing
    const [arr, changeArr]=useState({
      title:'useState',
      sub:'Use state with useState() by destructing'
      });
    const [flag, setFlag]=useState(true);
    const [number, setNumber]=useState(0);
    
    const method1 = (num) => {
      return <p>Current state number is {num}</p>
    }

    const onChange = (e) =>{
      e.preventDefault();

      // 소괄호(): 리턴값, 중괄호{}: 구역 나눔
      // 아래 코드 실행 시 오류남 중괄호 사용 x
      // flag ? (
      //   changeArr({title:'changeArr', sub:'the function which can set States returned by useState method'}),
      //   setFlag(false)  
      // )     
      // : (
      //   changeArr({title:'useState', sub:'Use state with useState() by destructing'}),
      //   setFlag(true)
      // )

      if(flag===true){
        changeArr({title:'changeArr', sub:'the function which can set States returned by useState method'});
        setFlag(false);
      }
      else{
        changeArr({title:'useState', sub:'Use state with useState() by destructing'});
        setFlag(true);
      }
    }

    // useEffect : 서버에서 데이터 fetch 및 처리, 클래스 컴포넌트의 componentDidMount 기능

    const newBatterList=data.batters.batter.map((elem, index)=>{
      return(
        <li key={index}>
          id: {elem.id}, type: {elem.type}
        </li>
      );
    });
    const newToppingList=data.topping.map((elem, index)=>{
      return(
        <li key={index}>
          id: {elem.id}, type: {elem.type}
        </li>
      );
    });

    return (
      <div className="App">
          <nav className="black-nav">Hooks & React Routing</nav>
          <div className="list">
            <h3>{arr.title}</h3>
            <p>{arr.sub}</p>
            <button onClick={onChange}>setState</button>
            <hr></hr>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route> 
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact} />
              <Route path='/param/:id' component={Param} />
              <Route component={NotFound} />
            </Switch>
            <hr></hr>

            {number}
            <span>
              <button onClick={()=>setNumber(number-1)}>
                -1
              </button>
              <button onClick={()=>setNumber(number+1)}>
                +1
              </button>
              {method1(number)}
            </span>
            <hr></hr>

            <div>
              <h3>READ JSON DATA</h3>
              id: {data.id}<br></br>
              type: {data.type}<br></br>
              name: {data.cake}<br></br>
              ppu: {data.ppu}<br></br><br></br>
              <b>batters</b>
              <ul>
                {newBatterList}
              </ul>
              <b>topping</b>
              <ul>
                {newToppingList}
              </ul>
            </div>
          </div>
      </div>
    );
}
export default App;
