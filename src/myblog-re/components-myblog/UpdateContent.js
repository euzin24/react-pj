import '../Myblog.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function UpdateContent(props){
    const [selectedCat, setSelectedCat]=useState(props.article.cat)
    const [showMenu, setMenu]=useState(false);
    const [title, setTitle]=useState(props.article.title);
    const [content, setContent]=useState(props.article.content);
    let history=useHistory();

    const inputTitleHandler=(e)=>{
        setTitle(e.target.value);
    }

    const inputContentHandler=(e)=>{
        setContent(e.target.value)
    }

    const menuForm=(e)=>{
        e.preventDefault();
        if (showMenu===false){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }

    const getCategoryTitle=()=>{
        for(var i=0; i<props.cats.length; i++){
            if(selectedCat===props.cats[i].id){
                return props.cats[i].title;
            }
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

    const onSubmit=(e)=>{
        e.preventDefault();
        if(window.confirm("게시물을 수정합니다")){
            if(e.target.title.value!=='' && e.target.content.value!==''){
                props.updateArticle(
                    selectedCat, 
                    e.target.title.value, 
                    e.target.content.value);
                history.goBack();
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
                    <input type="text" name="title" value={title}
                        onChange={inputTitleHandler}></input>
                </p>
                <p>
                    <textarea name="content" value={content}
                        onChange={inputContentHandler}></textarea>
                </p>
                <button type="submit">확인</button>
            </form>
        </div>
    );
}

export default UpdateContent;