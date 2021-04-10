import '../Myblog.css';
import { Component } from 'react';

class ReadContent extends Component{
    render(){
        var _id=this.props.id-1;
        return(
            <div className="content">
                <h2>{this.props.article[_id].title}</h2>
                <hr></hr>
                <p>{this.props.article[_id].content}</p>
            </div>
        )
    }
}

export default ReadContent;