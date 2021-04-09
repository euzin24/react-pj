import './Myblog.css';
import { Component } from 'react';
import Nav from './components-myblog/Nav'
import Content from './components-myblog/Content';

class Myblog extends Component{
    constructor(props){
        super(props);
        this.max_category_id=3;
        this.state={
            mode:'read',
            selected_category: 0,
            profile:{name:'Euzin24', desc:'개발 블로그'},
            categories:[{id:0, title:'전체'}, {id:1, title:'카테고리1'}, 
            {id:2, title:'카테고리2'}, {id:3, title:"카테고리3"}]
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
                            selected_category: _id
                        });
                    }.bind(this)}></Nav>
                <Content 
                    mode={this.state.mode}
                    num={this.state.selected_category}
                    data={this.state.categories}
                    max_category_id={this.max_category_id}
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
                    updateCategory={function(_content, _max){
                        this.max_category_id=_max;
                        console.log(this.max_category_id);
                        this.setState({
                            categories:_content
                        });
                    }.bind(this)}
                    ></Content>
            </div>
        );
    }
}

export default Myblog;