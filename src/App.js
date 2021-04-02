import './App.css';
import App1 from './App1'
import App2 from './App2'
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      id:0
    }
  }

  showContent(){
    var _index="Hello React!";
    var _app=null;
    var _id=this.state.id;
    if (_id===1){
      _app=<App1></App1>
    }
    else if(_id===2){
      _app=<App2></App2>;
    }
    else{
      _app=_index;
    }
    return _app;
  }

  render(){
    return(
      <div>
        <button onClick={function(){
          this.setState({
          id:1
        })}.bind(this)}>App1</button>
        <button onClick={function(){
          this.setState({
          id:2
        })}.bind(this)}>App2</button>

        {this.showContent()}
      </div>
    );
  }
}

export default App;