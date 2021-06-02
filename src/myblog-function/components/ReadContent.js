import '../Myblog.css';
import React, { useState } from 'react';
import { Link, useParams, useHistory, NavLink } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {selectedCat} from '../features/categorySlice';
import {selectedCon,
    getContentByCategoryId,
    set_selected_content,
    delete_con,
    getContentInfoByContentId} from '../features/contentSlice';

function ReadContent(){
    const [selectedPage, setSelectedPage]=useState(1);
    const selectedContentId = useSelector(selectedCon);
    const selectedCategoryId=useSelector(selectedCat);
    const contentList = useSelector(getContentByCategoryId(selectedCategoryId));
    const dispatch = useDispatch()
    let cat_title=useParams().cat_title;
    let history=useHistory();

    const showList=()=>{
        let content=[];
        let temp=null;
        let path;

        if(selectedPage*5 > contentList.length){
            temp=contentList.slice((selectedPage-1)*5, contentList.length);
            temp.forEach(element => {
                content.push(
                    <li key={element.id}>
                        <span onClick={(e)=>{
                            e.preventDefault();
                            // props.resetSelectedContent();
                            dispatch(set_selected_content(element.id));
                        }}>{element.title}</span>
                    </li>
                )
            });
        }else{
            temp=contentList.slice((selectedPage-1)*5, selectedPage*5);
            temp.forEach(element => {
                content.push(
                    <li key={element.id}>
                        {/* <NavLink to={path}>
                            <span onClick={(e)=>{
                                e.preventDefault();
                                props.resetSelectedContent(element.id);
                            }}>{element.title}</span>
                        </NavLink> */}
                        <span onClick={(e)=>{
                            e.preventDefault();
                            // props.resetSelectedContent(element.id);
                            dispatch(set_selected_content(element.id));
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
        if((selectedPage*5)>=parseInt(contentList.length)){
            return true;}
        else{return false;}
    }
    
    const deleteContent=(e)=>{
        e.preventDefault();
        if(window.confirm("정말 삭제하시겠습니까?")){
            // props.deleteContent(props.article.id);
            dispatch(delete_con());
            alert("삭제되었습니다!");
            history.push(`/${cat_title}`);
        }
    }
    
    const contentInfo =
        selectedContentId ? 
        contentList.find(item=>item.id===selectedContentId)
        :
        {title:null, content:null}

    console.log(contentInfo);

    return(
        <div className="content">
            <h2>{contentInfo.title}</h2>
            <hr></hr>
            <p>{contentInfo.content}</p>
            <hr></hr>
            <button><Link to={`/update/${selectedContentId}`}>수정</Link></button>
            <button onClick={deleteContent}>삭제</button>
            <hr></hr>
            <p>"{cat_title}"의 다른 게시글</p>
            
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