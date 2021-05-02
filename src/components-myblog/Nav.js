import '../Myblog.css';
import { Component } from 'react';
import logo from '../logo.svg';

// const showList=()=>{
//     var _list=[];
//     for (let _data of this.props.data){
//         _list.push(
//             <li key={_data.id}>
                    // <span onClick={function(_id){
                    //     this.props.setMode('read-list');
                    //     this.props.setSelectedCategory(_data.id);
                    // }.bind(this)}>
                    //     {_data.title}
                    // </span>
//             </li>);
//     }
//     return _list;
// }

// function Nav(){
//     return(
//         <div className="nav-bar">
//             <header className="header">
//                 <Link to='/'>
//                     <img className="profile-img" alt="logo" src={logo}></img>
//                 </Link>
//                 <h3>{this.props.name}</h3>
//                 <p>{this.props.desc}</p>
//             </header>
//             <nav>
//                 <h4>Categories</h4>
//                 <ul className="nav-cat-list">
//                     {showList()}
//                 </ul>
//                 <button className="nav-btn" onClick={function(e){
//                     e.preventDefault();
//                     this.props.setMode('set-cats');
//                     }.bind(this)}>
//                     <Link to='/setting-cats'>카테고리 편집</Link>
//                 </button>
//             </nav>
//         </div>
//     );
// }

class Nav extends Component{
    showList(){
        var _list=[];
        for (let _data of this.props.data){
            _list.push(
                <li key={_data.id}>
                    <span onClick={function(_id){
                        this.props.setMode('read-list');
                        this.props.setSelectedCategory(_data.id);
                    }.bind(this)}>
                        {_data.title}
                    </span>
                </li>);
        }
        return _list;
    }

    render(){
        return(
            <div className="nav-bar">
                <header className="header">
                    <img className="profile-img" alt="logo" src={logo}></img>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.desc}</p>
                </header>
                <nav>
                    <h4>Categories</h4>
                    <ul className="nav-cat-list">
                        {this.showList()}
                    </ul>
                    <button className="nav-btn" onClick={function(e){
                        e.preventDefault();
                        this.props.setMode('set-cats');
                        }.bind(this)}>
                        카테고리 편집
                    </button>
                </nav>
            </div>
        )
    }
}

export default Nav;