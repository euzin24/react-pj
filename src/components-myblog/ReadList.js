import '../Myblog.css';
import { Component } from 'react';

class ReadList extends Component{
    showList(){
        console.log(this.props.cat_data[this.props.num].title)
        var _num=this.props.num;
        var _articles=this.props.data;
        var _list=[];
        if(_num===0){
            for(let value of _articles){
                _list.push(
                    <li key={value.id} onClick={function(){
                        this.props.showContent(value.id);
                    }.bind(this)}>
                        <h2>{value.title}</h2>
                        <p>{value.content}</p>
                        <hr></hr>
                    </li>
                )
            }
        }
        else{
            for(let value of _articles){
                if(value.cat===_num){
                    _list.push(
                        <li key={value.id} onClick={function(){
                            this.props.showContent(value.id);
                        }.bind(this)}>
                            <h2>{value.title}</h2> 
                            <p>{value.content}</p>
                            <hr></hr>
                        </li>
                    )
                }
            }
        }
        if (_list.length===0){
            _list.push(<li key="0">게시글이 없습니다</li>);
        }
        return _list;
        
    }
    render(){
        
        return(
            <div className="content">
                <ul>
                    <div>{this.props.cat_data[this.props.num].title}</div>
                    {this.showList()}
                </ul>
            </div>
        )
    }
}

export default ReadList;