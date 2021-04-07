import './Myblog.css';
import { Component } from 'react';
import Nav from './components-myblog/Nav'
import Contents from './components-myblog/Contents';

class Myblog extends Component{
    constructor(props){
        super(props);
        this.state={
            profile:{name:'Euzin24', desc:'개발 블로그'},
            categories:[{id:1, title:'카테고리1'}, 
            {id:2, title:'카테고리2'}]
        }
    }
    render(){
        return(
            <div className="App">
                <Nav 
                    name={this.state.profile.name} 
                    desc={this.state.profile.desc}
                    data={this.state.categories}></Nav>
                <Contents></Contents>
            </div>
        );
    }
}

export default Myblog;