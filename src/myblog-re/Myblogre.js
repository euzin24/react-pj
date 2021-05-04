import './Myblog.css';
import React, { useState } from 'react';
import Nav from './components-myblog/Nav'
import Content from './components-myblog/Content';

function Myblog(){
    const [maxCat, setMaxCat]=useState(3)
    const [mode, setMode]=useState('read-list');
    const [selectedCat, setSelectedCat]=useState(0);
    const [profile, setProfile]=useState({name:'Euzin24', desc:'개발 블로그'});
    const [categories, SetCategories]=useState(
        [{id:0, title:'전체'}, 
        {id:1, title:'카테고리1'}, 
        {id:2, title:'카테고리2'}, 
        {id:3, title:"카테고리3"}]);
    
    return(
        <div className="App">
            reconstruction blog into hook function
            <Nav 
                name={profile.name} 
                desc={profile.desc}
                data={categories}
                setMode={(_mode)=>{
                    setMode(_mode);
                }}
                setSelectedCategory={(_id)=>{
                    setSelectedCat(_id);
                }}></Nav>
            <Content 
                mode={mode}
                selected_cat={selectedCat}
                cats={categories}
                max_category_id={maxCat}
                setMode={(_mode)=>{
                    setMode(_mode);
                }}
                setSelectedCategory={(_id)=>{
                    setSelectedCat(_id);
                }}
                updateCategory={(_content, _max)=>{
                    setMaxCat(_max);
                    setSelectedCat(0);
                    SetCategories(_content);
                }}
                ></Content>
        </div>
    );
}

export default Myblog