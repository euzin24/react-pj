import '../Myblog.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class ReadList extends Component{
    showList(){
        var selected_category=this.props.cat_id;
        var _articles=this.props.data;
        var _list=[];
        var _path=null;
        if(selected_category===0){
            for(let value of _articles){
                _path='/read-content/'+this.props.cat_title+'/'+value.id
                _list.push(
                    <li key={value.id} onClick={function(){
                        this.props.showContent(value.id);
                    }.bind(this)}>
                        <Link to={_path}>
                            <h2>{value.title}</h2>
                            <p>{value.content}</p>
                        </Link>
                        <hr></hr>
                    </li>
                )
            }
        }
        else{
            for(let value of _articles){
                if(value.cat===selected_category){
                    _path='/read-content/'+this.props.cat_title+'/'+value.id
                    _list.push(
                        <li key={value.id} onClick={function(){
                            this.props.showContent(value.id);
                        }.bind(this)}>
                            <Link to={_path}>
                                <h2>{value.title}</h2> 
                                <p>{value.content}</p>
                            </Link>
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