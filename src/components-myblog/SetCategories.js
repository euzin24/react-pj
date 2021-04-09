import '../Myblog.css';
import { Component } from 'react';

class SetCategories extends Component{
    constructor(props){
        super(props);
        this.max_category_id=this.props.max_category_id;
        this.state={
            flag:0,
            categories:this.props.data
        }
    }
    showList(){
        var _list=[];
        for (let _data of this.state.categories){
            if(_data.id!==0){
                _list.push(
                    <li key={_data.id}>
                        {_data.title}
                        <button>수정</button>
                        <button>삭제</button>
                    </li>);
            } 
        }
        return _list;
    }

    showForm(){
        var _content=null;
        if (this.state.flag===0){
            return _content;
        }
        else if (this.state.flag===1){
            _content=
            <form
                method="post"
                onSubmit={function(e){
                    e.preventDefault();
                    this.setState({flag:0});
                    this.max_category_id=this.max_category_id+1;
                    var _id=this.max_category_id;
                    var _new=this.state.categories.concat(
                        {id:_id, title:e.target.category.value});
                    this.setState({
                        categories:_new
                    });
            }.bind(this)}>
                <p>
                <input type="text" name="category" placeholder="새 카테고리 명"></input>
                </p>
                <button type="submit">Submit</button>
            </form>;
            return _content;
        }
    }

    render(){
        
        return(
            <div className="content">
                <ul>
                    {this.showList()}
                </ul>
                <button onClick={function(e){
                    e.preventDefault();
                    this.props.update(this.state.categories, this.max_category_id);
                }.bind(this)}>적용</button>
                <button onClick={function(e){
                    e.preventDefault();
                    this.setState({flag:1});
                }.bind(this)}>새 카테고리 만들기</button>
                <div>
                    {this.showForm()}
                </div>
            </div>
        )
    }
}

export default SetCategories;