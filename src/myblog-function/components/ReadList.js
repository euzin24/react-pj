import '../Myblog.css';
import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ReadList(props){
    let cat_title=useParams().cat_title;
    
    const showList=()=>{
        var selected_category=props.cat_id;
        var _list=[];
        
        if(selected_category===0){
            for(let value of props.data){
                _list.push(
                    <li key={value.id} onClick={()=>{
                    props.showContent(value.id);
                    }}>
                        <Link to={'/'+cat_title+'/'+value.id}>
                            <h2>{value.title}</h2>
                            <p>{value.content}</p>
                        </Link>
                        <hr></hr>
                    </li>
                );
            }
        }
        else{
            for(let value of props.data){
                if(value.cat===selected_category){
                    _list.push(
                        <li key={value.id} onClick={()=>{
                            props.showContent(value.id);
                        }}>
                            <Link to={'/'+cat_title+'/'+value.id}>
                                <h2>{value.title}</h2>
                                <p>{value.content}</p>
                            </Link>
                            <hr></hr>
                        </li>
                    );
                }
            }
        }
        if (_list.length===0){
            _list.push(<li key='#'>게시글이 없습니다</li>);
        }
        return _list;
    }

    return(
        <div className="content">
                <ul>
                    {cat_title}
                    <button style={{float:'right'}}>
                        <Link to='/create'>새글쓰기</Link></button>
                    {showList()}
                </ul>
            </div>
    );
}

export default ReadList;