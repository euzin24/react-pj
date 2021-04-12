import '../Myblog.css';
import { Component } from 'react';
import Select from 'react-select';

class CreateContent extends Component{
    showContent(){
        var _content;
        var _article=this.props.article;
        var _id=this.props.id; //selected content id

        _article.forEach(element => {
            if(element.id===_id){
                _content=
                <div>
                    <h2>{element.title}</h2>
                    <hr></hr>
                    <p>{element.content}</p>
                </div>;
            }
        });
        return _content;
    }
    
    render(){
        return(
            <div className="content">
                CreateContent
                {this.showContent()}
            </div>
        )
    }
}

export default CreateContent;