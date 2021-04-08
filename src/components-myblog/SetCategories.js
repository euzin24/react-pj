import '../Myblog.css';
import { Component } from 'react';

class SetCategories extends Component{
    render(){
        var _list=[];
        for (let _data of this.props.data){
            if(_data.id!==0){
                _list.push(
                    <li key={_data.id}>
                        {_data.title}
                    </li>);
            } 
        }

        return(
            <div className="content">
                <ul>
                    {_list}
                </ul>
                <button onClick={function(e){
                    e.preventDefault();
                    this.props.goBack();
                }.bind(this)}>확인</button>
            </div>
        )
    }
}

export default SetCategories;