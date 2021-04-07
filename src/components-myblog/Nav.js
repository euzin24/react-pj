import '../Myblog.css';
import { Component } from 'react';
import logo from '../logo.svg';

class Nav extends Component{
    render(){
        var _list=[];
        var _data=this.props.data;
        var i=0;
        while(i<_data.length){
            _list.push(
                <li key={_data[i].id}>{_data[i].title}</li>)
            console.log(_data[i].title)
            i=i+1;
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
                    <button className="nav-btn">편집</button>
                </nav>
            </div>
        )
    }
}

export default Nav;