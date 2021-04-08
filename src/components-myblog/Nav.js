import '../Myblog.css';
import { Component } from 'react';
import logo from '../logo.svg';
import { findAllInRenderedTree } from 'react-dom/test-utils';

class Nav extends Component{
    render(){
        var _list=[];
        for (let _data of this.props.data){
            _list.push(
                <li key={_data.id}>
                    <span onClick={function(_id, e){
                        // e.preventDefault();
                        this.props.showCategory(_data.id);
                    }.bind(this)}>
                        {_data.title}
                    </span>
                </li>)
        }
        return(
            <div className="nav-bar">
                <header className="header">
                    <img className="profile-img" src={logo}></img>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                </header>
                <nav>
                    <h4>Categories</h4>
                    <ul className="nav-cat-list">
                        {_list}
                    </ul>
                    <button className="nav-btn" onClick={function(e){
                        e.preventDefault();
                        this.props.onChange();
                    }.bind(this)}>편집</button>
                </nav>
            </div>
        )
    }
}

export default Nav;