import './Myblog.css';
import React, { useState } from 'react';
import Nav from './components/Nav'
import Content from './components/Content';

function Myblog(){
    const [maxCat, setMaxCat]=useState(3)
    // const [mode, setMode]=useState('read-list');
    const [selectedCat, setSelectedCat]=useState(0);
    const [profile, setProfile]=useState({name:'Euzin24', desc:''});
    const [categories, SetCategories]=useState(
        [{id:0, title:'전체'}, 
        {id:1, title:'카테고리1'}, 
        {id:2, title:'카테고리2'}, 
        {id:3, title:"카테고리3"}]);
    
    return(
        <div className="App">
            <Nav></Nav>
            <Content 
                selected_cat={selectedCat}
                cats={categories}
                max_category_id={maxCat}
                setSelectedCategory={(_id)=>{
                    setSelectedCat(_id);
                }}
                updateCategory={(_content, _max)=>{
                    setMaxCat(_max);
                    setSelectedCat(0);
                    SetCategories(_content);
                }}
                ></Content>
            {/* <Test></Test> */}
        </div>
    );
}

export default Myblog