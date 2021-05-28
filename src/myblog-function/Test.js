import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedCat,
create_cat,
update_cat,
delete_cat,
set_selected_category } from './features/categorySlice';
import { selectedCon,
    create_con,
    update_con,
    delete_con, show_data } from './features/contentSlice'

export default function Test(){
    const category = useSelector(selectedCat);
    const data=useSelector(show_data);
    const content = useSelector(selectedCon);
    const [number, setNumber] = useState(1)
    
    const dispatch=useDispatch();
    return (
    <div>
        <h3>
            Categories {category}
        </h3>
        <button onClick={()=>dispatch(create_cat("#"))}>create</button>
        <button onClick={()=>dispatch(update_cat())}>update</button>
        <button onClick={()=>dispatch(delete_cat())}>delete</button>
        <input
            value={number}
            placeholder="new selected cat"
            onChange={(e)=>setNumber(e.target.value)}>
        </input>
        <button onClick={()=>dispatch(set_selected_category(number))}>apply</button>
        <hr></hr>
        <h3>
            Contents {content}
        </h3>
        <button onClick={()=>dispatch(create_con("#"))}>create</button>
        <button onClick={()=>dispatch(update_con())}>update</button>
        <button onClick={()=>dispatch(delete_con())}>delete</button>
        <ul>
            {data.map((value, index)=>{
                return (
                    <li key={index}>
                        <p>{value.title}</p>
                        {value.content}
                    </li>
                )
            })}
        </ul>
    </div>
    )
}