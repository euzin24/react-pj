import '../Myblog.css';
import React, { useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

function ReadContent(props){
    const [selectedPage, setSelectedPage]=useState(1);
    let cat_title=useParams().cat_title;
    let history=useHistory();

    const showList=()=>{
        var content=[];
        var list=props.list;
        var page_number=selectedPage;
        var temp=null;

        if(page_number*5>props.list.length){
            temp=list.slice((page_number-1)*5, props.list.length);
            temp.forEach(element => {
                content.push(
                    <li key={element.id}>
                        <span onClick={(e)=>{
                            e.preventDefault();
                            props.resetSelectedContent(element.id);
                        }}>{element.title}</span>
                    </li>
                )
            });
        }else{
            temp=list.slice((page_number-1)*5, page_number*5);
            temp.forEach(element => {
                content.push(
                    <li key={element.id}>
                        <span onClick={(e)=>{
                            e.preventDefault();
                            props.resetSelectedContent(element.id);
                        }}>{element.title}</span>
                    </li>
                )
            });
        }
        return content;
    }

    const prevBtnControl=()=>{
        if(selectedPage===1){return true;}
        else{return false;}
    }

    const nextBtnControl=()=>{
        if((selectedPage*5)>=parseInt(props.list.length)){
            return true;}
        else{return false;}
    }

    const modifyContent=(e)=>{
        e.preventDefault();
        props.modifyContent();
    }   

    const deleteContent=(e)=>{
        e.preventDefault();
        if(window.confirm("정말 삭제하시겠습니까?")){
            props.deleteContent(props.article.id);
            alert("삭제되었습니다!");
            history.goBack();
        }
    }

    return(
        <div className="content">
            <h2>{props.article.title}</h2>
            <hr></hr>
            <p>{props.article.content}</p>
            <hr></hr>
            <button onClick={modifyContent}><Link to={'/update/'+props.article.id}>수정</Link></button>
            <button onClick={deleteContent}>삭제</button>
            <hr></hr>
            <p>{cat_title}의 다른 게시글</p>
            
            <ul>
                {showList()}
            </ul>
            <button 
                disabled={prevBtnControl()}
                onClick={(e)=>{
                    e.preventDefault();
                    setSelectedPage(selectedPage-1);
                }}>이전</button>
            <button
                disabled={nextBtnControl()}
                onClick={(e)=>{
                    e.preventDefault();
                    setSelectedPage(selectedPage+1);
                }}>다음</button>
        </div>
    );
}

export default ReadContent;