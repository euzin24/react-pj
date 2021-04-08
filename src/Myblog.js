import './Myblog.css';
import { Component } from 'react';
import Nav from './components-myblog/Nav'
import Content from './components-myblog/Content';

class Myblog extends Component{
    constructor(props){
        super(props);
        this.state={
            mode:'read',
            category_num: 0,
            profile:{name:'Euzin24', desc:'개발 블로그'},
            categories:[{id:0, title:'전체'}, {id:1, title:'!카테고리1'}, 
            {id:2, title:'카테고리2'}]
        }
    }

    render(){
        return(
            <div className="App">
                <Nav 
                    name={this.state.profile.name} 
                    desc={this.state.profile.desc}
                    data={this.state.categories}
                    onChange={function(){
                        this.setState({
                            mode:'set-cats'
                        });
                    }.bind(this)}
                    showCategory={function(_id){
                        this.setState({
                            mode:'read',
                            category_num: _id
                        });
                    }.bind(this)}></Nav>
                <Content 
                    mode={this.state.mode}
                    num={this.state.category_num}
                    data={this.state.categories}
                    onChange={function(){
                        this.setState({
                            mode:'read'
                        });
                    }.bind(this)}
                    showContent={function(){
                        this.setState({
                            mode:'read-contents'
                        });
                    }.bind(this)}
                    ></Content>
            </div>
        );
    }
}

export default Myblog;