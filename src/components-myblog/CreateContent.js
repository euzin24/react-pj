import '../Myblog.css';
import { Component } from 'react';
import Downshift from 'downshift';

class CreateContent extends Component{
    constructor(props){
        super(props);
        this.state={
            selected_category: this.props.selected_category,
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this);
    }
      
    showMenu(e) {
        e.preventDefault();
        if (this.state.showMenu===false){
            this.setState({showMenu:true});
        }else{
            this.setState({showMenu:false});
        }
    }

    showCategories(){
        var list=[];
        if(this.state.showMenu===true){
            this.props.cats.forEach(element => {
                if(element.id===this.state.selected_category){
                    list.push(
                        <li key={element.id} style={{backgroundColor:"#cccccc"}}>
                            {element.title}
                        </li>
                    );
                }else{
                    list.push(
                        <li key={element.id}
                            onClick={function(e){
                                e.preventDefault();
                                this.setState({selected_category:element.id, showMenu:false});
                                }.bind(this)}>
                            {element.title}
                        </li>
                    );
                }
            });
        }
        return list;
    }

    render(){
        return(
            <div className="content">
                <form onSubmit={function(e){
                    e.preventDefault();
                    this.props.createArticle(this.state.selected_category, e.target.title.value, e.target.content.value);
                    console.log(e.target.title.value);
                    console.log(e.target.content.value);
                }.bind(this)}>
                    <div>
                        <h3>{this.props.cats[this.state.selected_category].title}
                            <button style={{marginLeft:'3em'}}
                            onClick={this.showMenu}>카테고리 선택</button></h3>
                        <ul>
                            {this.showCategories()}
                        </ul> 
                    </div>                    
                    <input type="text" name="title" placeholder="제목" onKeyPress={null}></input>
                    <textarea name="content" placeholder="내용..."></textarea>
                    <button type="submit">확인</button>
                </form>
            </div>
        )
    }
}

export default CreateContent;