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
    getContentByCategoryId } from './features/contentSlice'

export default function Test(){
    const dispatch = useDispatch();
    const category = useSelector(selectedCat);
    const data = useSelector(getCategories);
    const [number, setNumber] = useState(1)
    const filteredContent=useSelector(getContentByCategoryId(category));
    const categoryTitle=useSelector(getCategoryTitle(category));

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
        <button onClick={()=>dispatch(create_con("#"))}>create</button>
        <button onClick={()=>dispatch(update_con())}>update</button>
        <button onClick={()=>dispatch(delete_con())}>delete</button>
        
        <ul>
            {data.map((value)=>{
                return(
                    <li key={value.id}>
                        <span onClick={(e)=>{
                            e.preventDefault()
                            dispatch(set_selected_category(value.id));
                            setNumber(value.id);
                        }}>
                            {value.title}</span>
                    </li>
                )
            })}
        </ul>

        {categoryTitle}

        <ul>
            {filteredContent.map((value)=>{
                return (
                    <li key={value.id}>
                        <h3>{value.title}</h3>
                        <p>{value.content}</p>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}