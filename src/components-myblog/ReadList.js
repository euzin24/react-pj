import '../Myblog.css';
import { Component } from 'react';

class ReadList extends Component{
    showList(){
        var _content=null;
        var _num=this.props.num;
        var _articles=this.props.data;
        var _list=[];
        if(_articles===null){
            _content="데이터가 없습니다."
            return _content;
        }
        else{
            if(_num===0){
                for(let value of _articles){
                    _list.push(
                        <li key={value.id} onClick={function(){
                            this.props.showContent(value.id);
                        }.bind(this)}>
                            <h2>{value.title}</h2> <span>{this.props.cat_data[value.cat].title}</span>
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
                                <h2>{value.title}</h2> <span>{this.props.cat_data[value.cat].title}</span>
                                <p>{value.content}</p>
                                <hr></hr>
                            </li>
                        )
                    }
                }
            }
        }
        return _list;
    }
    render(){
        
        return(
            <div className="content">
                <ul>
                    {this.showList()}
                </ul>
            </div>
        )
    }
}

export default ReadList;