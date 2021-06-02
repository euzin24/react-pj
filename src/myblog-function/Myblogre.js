import './Myblog.css';
import React from 'react';
import Nav from './components/Nav'
import Content from './components/Content';

export default function Myblog(){
    return(
        <div className="App">
            <Nav></Nav>
            <Content></Content>
            {/* <Test></Test> */}
        </div>
    );
}