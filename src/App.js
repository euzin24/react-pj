import './App.css';
import { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      mode: 'welcome',
      subject: {title:'WEB', sub:'World Wide Web!'},
      welcome: {title:'Welcome', desc:'World Wide Web!'},
      selected_content_id:2, 
      contents: [
        {id:1, title:'HTML', desc:'HTML is for infomation'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    var _title, _desc = null;
    if (this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    } else if(this.state.mode==='read'){
      var i=0;
      while(i<this.state.contents.length){
        var data=this.state.contents[i];
        if (data.id===this.state.selected_content_id){
          _title=data.title;
          _desc=data.desc;
          break;
        }
        i=i+1;
      }
    }
    return(
      <div>
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){ //사용자 정의 이벤트
            this.setState({mode:'welcome'});
          }.bind(this)}>
        </Subject>
        <TOC
          onChangePage={function(id){
            this.setState({
              mode:'read',
              selected_content_id:Number(id)})
          }.bind(this)}
          data={this.state.contents}>
        </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
