import '../Myblog.css';
import { Component } from 'react';

class ReadList extends Component{
    showList(){
        var selected_category=this.props.cat_id;
        var _articles=this.props.data;
        var _list=[];
        if(selected_category===0){
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
                if(value.cat===selected_category){
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
            _list.push(<li key='#'>게시글이 없습니다</li>);
        }
        return _list;
    }

    render(){
        return(
            <div className="content">
                <ul>
                    {this.props.cat_title}
                    <button style={{float:'right'}}
                        onClick={function(e){
                            e.preventDefault();
                            this.props.doCreate();
                        }.bind(this)}>새글쓰기</button>
                    {this.showList()}
                </ul>
            </div>
        )
    }
}

export default ReadList;