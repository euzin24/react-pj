import '../Myblog.css';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
        notice=<li key="#">게시글이 없습니다.</li>
    }else{notice=null;}

    return(
        <div className="content">
                <ul>
                    {selected_cat_title}
                    <button style={{float:'right'}}>
                        <Link to='/create'>새글쓰기</Link></button>
                    {/* {showList()} */}
                        {notice}
                        {filteredContent.map((value)=>{
                            return(
                                <li key={value.id} onClick={()=>{
                                    // props.showContent(value.id);
                                    dispatch(set_selected_content(value.id));
                                }}>
                                    <Link to={'/'+selected_cat_title+'/'+value.id}>
                                        <h2>{value.title}</h2>
                                        <p>{value.content}</p>
                                    </Link>
                                    <hr></hr>
                                </li>
                            )
                        })}
                </ul>
            </div>
    );
}

export default ReadList;