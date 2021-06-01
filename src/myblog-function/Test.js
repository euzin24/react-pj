import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedCat,
// create_cat,
update_cat,
// delete_cat,
set_selected_category, 
getCategories, 
selectCategory,
getCategoryTitle} from './features/categorySlice';
import { selectedCon,
    create_con,
    update_con,
    delete_con,
    getContent,
    getContentByCategoryId} from './features/contentSlice'

function PropsTest(props){
    console.log(props.data[1].title);
    // let categories=props.data;
    // categories[0].title="dksjdkajd";
    // 당연히 props값을 읽어오는 것도 안됨
    return (
        <div>
            props test
        </div>
    )
}

export default function Test(){
    const dispatch = useDispatch();
    const category = useSelector(selectedCat);
    const filteredContent=useSelector(getContentByCategoryId(category));
    const [number, setNumber] = useState(1)
    const data = useSelector(getCategories);
    // console.log(data);
    // var temp=data;
    // temp[1].title="카테고리 1이지롱.";
    // console.log(temp[1].title);

    return (
    <div>
        <h3>
            Selected Category: {category}
        </h3>
        {/* <button onClick={()=>dispatch(create_cat("#"))}>create</button> */}
        <button onClick={()=>dispatch(update_cat())}>update</button>
        {/* <button onClick={()=>dispatch(delete_cat())}>delete</button> */}
        <input
            value={number}
            placeholder="new selected cat"
            onChange={(e)=>setNumber(e.target.value)}>
        </input>
        <button onClick={()=>dispatch(set_selected_category(number))}>apply</button>
        <hr></hr>
            
        <h3>
            Contents
        </h3>
        <form
            onSubmit={(e)=>{
                e.preventDefault();
                dispatch(create_con(
                    {cat:category,
                    title:e.target.title.value,
                    content:e.target.content.value}));
            }}>
            <input name='title' placeholder="제목"></input>
            <input name='content' placeholder="내용"></input>
            <button type='submit'>create</button>
        </form>
        
        {/* <button onClick={()=>dispatch(delete_con())}>delete</button> */}
        
        {filteredContent.map((value)=>{
            return (
                <li key={value.id}>
                    {value.title}/ 
                    <span>{value.content}
                        <button onClick={()=>dispatch(delete_con(value.id))}>Delete
                        </button></span>
                </li>
            );
        })}        
        
    </div>
    )
}