import './Myblog.css';
import { Component } from 'react';
import Nav from './components-myblog/Nav'
import Content from './components-myblog/Content';

// function Myblog(){
//     const max_category_id=3;
//     const [mode, setMode]=useState('read-list');
//     const [selectedCat, setSelectedCat]=useState(0);
//     const [profile, setProfile]=useState({name:'Euzin24', desc:'개발 블로그'});
//     const [categories, SetCategories]=useState(
//         {id:0, title:'전체'}, 
//         {id:1, title:'카테고리1'}, 
//         {id:2, title:'카테고리2'}, 
//         {id:3, title:"카테고리3"});
    
//     return(
//         <div className="App">
//             <Nav 
//                 name={profile.name} 
//                 desc={profile.desc}
//                 data={categories}
//                 setMode={function(_mode){
//                     setMode(_mode);
//                 }}
//                 setSelectedCategory={function(_id){
//                     setSelectedCat(_id);
//                 }}></Nav>
//             <Content 
//                 mode={mode}
//                 selected_cat={selectedCat}
//                 cats={categories}
//                 max_category_id={max_category_id}
//                 setMode={function(_mode){
//                     setMode(_mode);
//                 }}
//                 setSelectedCategory={function(_id){
//                     setSelectedCat(_id);
//                 }}
//                 updateCategory={function(_content, _max){
//                     max_category_id=_max;
//                     setSelectedCat(0);
//                     SetCategories(_content);
//                 }}
//                 ></Content>
//         </div>
//     );
// }


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