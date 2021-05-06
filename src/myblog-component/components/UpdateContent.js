import '../Myblog.css';
import { Component } from 'react';

class UpdateContent extends Component{
    constructor(props){
        super(props);
        this.state={
            selected_category: this.props.article.cat,
            showMenu: false,
            title: this.props.article.title,
            content: this.props.article.content
        }
        this.showMenu = this.showMenu.bind(this);
        this.inputFormHandler = this.inputFormHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    inputFormHandler(e){
        this.setState({[e.target.name]:e.target.value});
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

    getCategoryTitle(){
        for(var i=0; i<this.props.cats.length; i++){
            if(this.state.selected_category===this.props.cats[i].id){
                return this.props.cats[i].title;
            }
        }
    }

    onSubmit(e){
        e.preventDefault();
        if(window.confirm("게시물을 수정합니다")){
            if(e.target.title.value!=='' && e.target.content.value!==''){
                this.props.updateArticle(
                    this.state.selected_category, 
                    e.target.title.value, 
                    e.target.content.value);
            }else{
                alert("내용이 없습니다!!!");
            }
        }
    }

    render(){
        return(
            <div className="content">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h3>{this.getCategoryTitle()}
                            <button style={{marginLeft:'3em'}}
                            onClick={this.showMenu}>카테고리 선택</button></h3>
                        <ul>
                            {this.showCategories()}
                        </ul> 
                    </div>                    
                    <p>
                        <input type="text" name="title" value={this.state.title}
                            onChange={this.inputFormHandler}></input>
                    </p>
                    <p>
                        <textarea name="content" value={this.state.content}
                            onChange={this.inputFormHandler}></textarea>
                    </p>
                    <button type="submit">확인</button>
                </form>
            </div>
        )
    }
}

export default UpdateContent;