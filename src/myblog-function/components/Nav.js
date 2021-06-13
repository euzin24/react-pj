import '../Myblog.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import {getCategories, set_selected_category} from '../features/categorySlice';
import {useDispatch, useSelector} from 'react-redux';

function Nav(props){
    const data=useSelector(getCategories);
    const dispatch = useDispatch();

    const showList=()=>{
        let _list=[];
        let _path=null;

        for (let _data of data){
            _path=`/${_data.title}`;
            _list.push(
                <li key={_data.id} className="spacious">
                    <NavLink to={_path}>
                        <span onClick={(_id)=>{
                            // props.setSelectedCategory(_data.id);
                            dispatch(set_selected_category(_data.id));
                            }}>
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
                    <img onClick={()=>{
                        dispatch(set_selected_category(0));
                    }} className="profile-img fa fa-circle" alt="logo" src={logo}></img>
                </Link>
                <h3>Euzin24</h3>
                <p>개발 블로그</p>
            </header>
            <nav>
                <h4>Categories</h4>
                <ul>
                    {showList()}
                </ul>
                <button className="btn-default setting">
                    <Link to="/setting">카테고리 편집</Link>
                </button>
            </nav>
        </div>
    );
}

export default Nav;