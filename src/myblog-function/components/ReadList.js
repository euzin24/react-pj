import '../Myblog.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectedCat, getCategoryTitle } from '../features/categorySlice';
import { getContentByCategoryId,set_selected_content } from '../features/contentSlice'

function ReadList(props){
    const selected_cat_id = useSelector(selectedCat);
    const selected_cat_title = useSelector(getCategoryTitle(selected_cat_id));
    const filteredContent=useSelector(getContentByCategoryId(selected_cat_id));
    const dispatch = useDispatch();
    // let cat_title=useParams().cat_title;
    let notice=null;

    if (filteredContent.length===0){
        notice=<li key="#" className="no-search">게시글이 없습니다.</li>
    }else{notice=null;}

    const showPreview = (content) =>{
        if(content.length>30){
            return `${content.slice(0, 30)}...`
        }
        else{
            return content
        }
    }

    return(
        <div className="content">
            <small style={{marginBottom:"2em"}}>
                "{selected_cat_title}"의 게시글
                <button style={{float:'right'}}>
                    <Link to='/create' className="black">새글쓰기</Link>
                </button>
            </small>
            <ul>
            {notice}
            {filteredContent.map((value)=>{
                return(
                    <div key={value.id}>
                        <li onClick={()=>{
                            // props.showContent(value.id);
                            dispatch(set_selected_content(value.id));
                            }}>
                            <Link to={'/'+selected_cat_title+'/'+value.id}
                                className="black">
                                <h3>{value.title}</h3>
                                <p>{showPreview(value.content)}</p>
                            </Link>
                        </li>
                        <hr></hr>
                    </div>
                )
            })}
            </ul>
        </div>
    );
}

export default ReadList;