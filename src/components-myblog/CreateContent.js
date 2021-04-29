import '../Myblog.css';
import { Component } from 'react';

class CreateContent extends Component{
    constructor(props){
        super(props);
        this.state={
            selected_category: this.props.selected_category,
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
        if(window.confirm("새 게시물을 발행합니다")){
            if(e.target.title.value!=='' && e.target.content.value!==''){
                this.props.createArticle(
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
                        <input type="text" name="title" placeholder="제목"></input>
                    </p>
                    <p>
                        <textarea name="content" placeholder="내용..."></textarea>
                    </p>
                    <button type="submit">
                        확인</button>
                </form>
            </div>
        )
    }
}

export default CreateContent;