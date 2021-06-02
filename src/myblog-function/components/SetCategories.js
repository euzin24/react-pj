import '../Myblog.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, maxCategoryNumber, update_cat } from '../features/categorySlice'
import { getContent } from '../features/contentSlice';
import _ from 'lodash';

function SetCategories(props){
    // let maxCatId = props.max_category_id;
    const dispatch = useDispatch();
    const [mode, setMode]=useState('default');
    const [updateCat, setUpdateCat]=useState(0);
    // const [catData, setCats]=useState(props.data);
    // const [catData, setCats]=useState(useSelector(getCategories));
    const [catData, setCats]=useState(_.cloneDeep(useSelector(getCategories)));
    const [maxCatId, setMax]=useState(_.cloneDeep(useSelector(maxCategoryNumber)));
    const conData=useSelector(getContent);

    const showCreateForm=()=>{
        let _content=null;
        if (mode==='create'){
            _content=
            <form
                method="post"
                onSubmit={(e)=>{
                    e.preventDefault();
                    if(e.target.category.value!==''){
                        setMode('default');
                        let _max=maxCatId+1
                        setMax(_max);
                        setCats(catData.concat(
                            {id:_max, title:e.target.category.value}));
                    }else{
                        alert("카테고리 명을 입력해주세요");
                    }
            }}>
                <p>
                <input type="text" name="category" placeholder="새 카테고리 명"></input>
                </p>
                <button type="submit">Submit</button>
            </form>;
        }
        return _content;
    }

    const checkEmpty=(_id)=>{
        return conData.filter(item=>item.cat===_id).length ? false : true
    }

    const showList=()=>{
        var _list=[];
        var temp=Array.from(catData);

        for (let _data of catData){
            if(_data.id!==0){
                if(_data.id===updateCat && mode==='update'){
                    _list.push(
                        <li key={_data.id}>
                            <form method="post"
                                onSubmit={(e)=>{
                                    e.preventDefault();
                                    if(e.target.title.value!==''){
                                        temp[_data.id].title=e.target.title.value;
                                        setMode('default');
                                        setCats(temp);
                                        setUpdateCat(0);
                                    }else{
                                        alert("카테고리 명을 입력해주세요");
                                    }
                                }}>
                                <input
                                    type="text" name="title" placeholder={_data.title}
                                ></input>
                                <button type="submit">확인</button>
                                <button onClick={(e)=>{
                                    e.preventDefault();
                                    setMode('default');
                                }}>취소</button>
                            </form>
                        </li>
                    );
                }
                else{
                    _list.push(
                        <li key={_data.id}>
                            {_data.title}
                            <button onClick={(e)=>{
                                e.preventDefault();
                                setMode('update');
                                setUpdateCat(_data.id);
                            }}>수정</button>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                if(window.confirm(_data.title+"을 삭제합니다")){
                                    if(checkEmpty(_data.id)){
                                        setCats(catData.filter(cat => cat.id!==_data.id));
                                    }else{
                                        alert("카테고리 내 게시글이 존재합니다!");
                                    }
                                }
                            }}>삭제</button>
                        </li>
                    );
                }
            } 
        }
        return _list;
    }

    const updateApply=(e)=>{
        e.preventDefault();
        if(window.confirm("변경사항 적용?")){
            dispatch(update_cat(
                {data: catData,
                maxCat:maxCatId}));
            alert("적용되었습니다!");
        }
    }

    return(
        <div className="content">
            Set Categorie function
            <ul>
                {showList()}
            </ul>
            <button onClick={updateApply}>
                <Link to='/전체'>적용</Link>
            </button>
            <button onClick={(e)=>{
                e.preventDefault();
                setMode('create');
                }}>새 카테고리 만들기</button>
            {showCreateForm()}
        </div>
    );
}

export default SetCategories;