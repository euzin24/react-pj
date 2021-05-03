import '../Myblog.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

function Nav(props){
    const showList=()=>{
        let _list=[];
        let _path=null;
        for (let _data of props.data){
            _path='/'+_data.title
            _list.push(
                <li key={_data.id}>
                    <NavLink to={_path}>
                        <span onClick={(_id)=>{
                            props.setMode('read-list');
                            props.setSelectedCategory(_data.id);}}>
                            {_data.title}
                        </span>
                    </NavLink>
                </li>);
        }
        return _list;
    }

    return(
        <div className="nav-bar">
            <header className="header">
                <Link to='/'>
                    <img className="profile-img" alt="logo" src={logo}></img>
                </Link>
                <h3>{props.name}</h3>
                <p>{props.desc}</p>
            </header>
            <nav>
                <h4>Categories</h4>
                <ul className="nav-cat-list">
                    {showList()}
                </ul>
                <button className="nav-btn">
                    <Link to="/setting">카테고리 편집</Link>
                </button>
            </nav>
        </div>
    );
}

export default Nav;