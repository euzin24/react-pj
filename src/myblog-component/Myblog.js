import './Myblog.css';
import { Component } from 'react';
import Nav from './components/Nav'
import Content from './components/Content';

class Myblog extends Component{
    constructor(props){
        super(props);
        this.max_category_id=3;
        this.state={
            mode:'read-list',
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
                    setMode={function(_mode){
                        this.setState({mode:_mode});
                    }.bind(this)}
                    setSelectedCategory={function(_id){
                        this.setState({selected_category: _id});
                    }.bind(this)}></Nav>
                <Content 
                    mode={this.state.mode}
                    selected_cat={this.state.selected_category}
                    cats={this.state.categories}
                    max_category_id={this.max_category_id}
                    setMode={function(_mode){
                        this.setState({mode:_mode});
                    }.bind(this)}
                    setSelectedCategory={function(_id){
                        this.setState({selected_category:_id});
                    }.bind(this)}
                    updateCategory={function(_content, _max){
                        this.max_category_id=_max;
                        this.setState({
                            selected_category: 0,
                            categories:_content
                        });
                    }.bind(this)}
                    ></Content>
            </div>
        );
    }
}

export default Myblog;