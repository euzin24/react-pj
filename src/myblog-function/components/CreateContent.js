import '../Myblog.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectedCat, 
    getCategories, 
    set_selected_category } from '../features/categorySlice';
import { create_con, maxContentNumber } from '../features/contentSlice';

function CreateContent(){
    // const [selectedCat, setSelectedCat]=useState(props.selected_category);
    const [showMenu, setMenu]=useState(false);
    const cat_id=useSelector(selectedCat);
    const cats=useSelector(getCategories);
    const max_content_number=useSelector(maxContentNumber);
    const dispatch = useDispatch();
    const history=useHistory();
    
    const menuForm=(e)=>{
        e.preventDefault();
        showMenu? setMenu(false):setMenu(true);
    }

    const showCategories=()=>{
        var list=[];
        if(showMenu===true){
            cats.forEach(element => {
                if(element.id===cat_id){
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
                                // setSelectedCat(element.id);
                                dispatch(set_selected_category(element.id));
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
        return cats.find(item=>item.id===cat_id).title;
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        let title=getCategoryTitle();

        if(window.confirm("새 게시물을 발행합니다")){
            if(e.target.title.value!=='' && e.target.content.value!==''){
                // props.createArticle(
                //     cat_id, 
                //     e.target.title.value, 
                //     e.target.content.value);
                dispatch(
                    create_con(
                        {cat:cat_id,
                        title:e.target.title.value,
                        content:e.target.content.value}
                    )
                );
                history.push(`/${title}/${max_content_number+1}`);
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