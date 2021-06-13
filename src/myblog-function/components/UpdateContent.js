import '../Myblog.css';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectedCat, 
    getCategories, 
    set_selected_category } from '../features/categorySlice';
import { getContentInfoByContentId,
    update_con } from '../features/contentSlice';
import _ from 'lodash';

function UpdateContent(props){
    // const [selected_cat_id, setSelectedCat]=useState(props.article.cat);
    const dispatch = useDispatch();
    const history=useHistory();

    const [showMenu, setMenu]=useState(false);
    const cat_id=useSelector(selectedCat);
    const cats=useSelector(getCategories);
    const contentInfo=_.cloneDeep(
        useSelector(getContentInfoByContentId(Number(useParams().id))));
    const [title, setTitle]=useState(contentInfo.title);
    const [content, setContent]=useState(contentInfo.content);

    const inputHandler=(e)=>{
        if(e.target.name==='title'){
            setTitle(e.target.value);
        }
        else if(e.target.name==='content'){
            setContent(e.target.value);
        }
    }

    const menuForm=(e)=>{
        e.preventDefault();
        showMenu? setMenu(false):setMenu(true);
    }

    const getCategoryTitle=()=>{
        return cats.find(item=>item.id===cat_id).title;
    }
    
    const showCategories=()=>{
        let list=[];
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

    const id=useParams().id;
    const onSubmit=(e)=>{
        e.preventDefault();
        const title=getCategoryTitle();
        if(window.confirm("게시물을 수정합니다")){
            if(e.target.title.value!=='' && e.target.content.value!==''){
                // props.updateArticle(
                //     selected_cat_id, 
                //     e.target.title.value, 
                //     e.target.content.value);
                dispatch(update_con({
                    cat:cat_id,
                    title:e.target.title.value,
                    content:e.target.content.value
                }));
                history.push(`/${title}/${id}`);
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

                <input className="title" type="text" name="title" value={title}
                    onChange={inputHandler}></input>
                <hr></hr>
                <textarea className="article" name="content" value={content}
                        onChange={inputHandler}></textarea>
                <button style={{float:"right"}} type="submit">수정</button>
            </form>
        </div>
    );
}

export default UpdateContent;