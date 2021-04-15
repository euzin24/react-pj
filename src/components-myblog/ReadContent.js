import '../Myblog.css';
import { Component } from 'react';

class ReadContent extends Component{
    constructor(props){
        super(props);
        this.state={
            selected_page:1
        }
    }

    showList(){
        var content=[];
        var list=this.props.list;
        var page_number=this.state.selected_page;
        var temp=null;
        if(page_number*5>this.props.list.length){
            temp=list.slice((page_number-1)*5, this.props.list.length);
            temp.forEach(element => {
                content.push(
                    <li key={element.id}>
                        <span onClick={function(e){
                            e.preventDefault();
                            this.props.resetSelectedContent(element.id);
                        }.bind(this)}>{element.title}</span>
                    </li>
                )
            });
        }else{
            temp=list.slice((page_number-1)*5, page_number*5);
            temp.forEach(element => {
                content.push(
                    <li key={element.id}>
                        <span onClick={function(e){
                            e.preventDefault();
                            this.props.resetSelectedContent(element.id);
                        }.bind(this)}>{element.title}</span>
                    </li>
                )
            });
        }
        return content;
    }

    prevBtnControl(){
        if(this.state.selected_page===1){return true;}
        else{return false;}
    }

    nextBtnControl(){
        if((this.state.selected_page*5)>=parseInt(this.props.list.length)){
            return true;}
        else{return false;}
    }

    render(){
        return(
            <div className="content">
                <h2>{this.props.article.title}</h2>
                <hr></hr>
                <p>{this.props.article.content}</p>
                <hr></hr>
                <button
                    onClick={function(e){
                        e.preventDefault();
                        this.props.modifyContent();
                    }.bind(this)}
                >수정</button>
                <button
                    onClick={function(e){
                        e.preventDefault();
                        if(window.confirm("정말 삭제하시겠습니까?")){
                            this.props.deleteContent(this.props.article.id);
                        }
                    }.bind(this)}
                >삭제</button>
                <hr></hr>
                <p>{this.props.cat_title}의 다른 게시글</p>
               
                <ul>
                    {this.showList()}
                </ul>
                
                <button 
                    disabled={this.prevBtnControl()}
                    onClick={function(e){
                        e.preventDefault();
                        var i=this.state.selected_page-1;
                        this.setState({selected_page: i});
                    }.bind(this)}>이전</button>
                <button
                    disabled={this.nextBtnControl()}
                    onClick={function(e){
                        e.preventDefault();
                        var i=this.state.selected_page+1;
                        this.setState({selected_page: i});
                    }.bind(this)}>다음</button>
            </div>
        )
    }
}

export default ReadContent;