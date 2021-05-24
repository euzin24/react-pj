import '../Myblog.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function CreateContent(props){
    const [selectedCat, setSelectedCat]=useState(props.selected_category);
    const [showMenu, setMenu]=useState(false);
    let history=useHistory();
    
    const menuForm=(e)=>{
        e.preventDefault();
        if (showMenu===false){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }

    const showCategories=()=>{
        var list=[];
        if(showMenu===true){
            props.cats.forEach(element => {
                if(element.id===selectedCat){
                    list.push(
                        <li key={element.id} style={{backgroundColor:"#cccccc"}}>
                            {element.title}
                        </li>
                    );
                }else{
                    list.push(
                        <li key={element.id}
                            onClick={(e)=>{
                                e.preventDefault();
                                setSelectedCat(element.id);
                                setMenu(false);
                                }}>
                            {element.title}
                        </li>
                    );
                }
            });
        }
        return list;
    }

    const getCategoryTitle=()=>{
        for(var i=0; i<props.cats.length; i++){
            if(selectedCat===props.cats[i].id){
                return props.cats[i].title;
            }
        }
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        var title=getCategoryTitle();

        if(window.confirm("새 게시물을 발행합니다")){
            if(e.target.title.value!=='' && e.target.content.value!==''){
                props.createArticle(
                    selectedCat, 
                    e.target.title.value, 
                    e.target.content.value);
                history.push(`/${title}/${props.max_content_id+1}`);
            }else{
                alert("내용이 없습니다!");
            }
        }
    }

    return(
        <div className="content">
            <form onSubmit={onSubmit}>
                <div>
                    <h3>{getCategoryTitle()}
                        <button style={{marginLeft:'3em'}}
                        onClick={menuForm}>카테고리 선택</button></h3>
                    <ul>
                        {showCategories()}
                    </ul> 
                </div>                    
                <p>
                    <input type="text" name="title" placeholder="제목"></input>
                </p>
                <p>
                    <textarea name="content" placeholder="내용..."></textarea>
                </p>
                <button type="submit">확인</button>
            </form>
        </div>
    );
}

export default CreateContent;