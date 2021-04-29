import '../Myblog.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class SetCategories extends Component{
    constructor(props){
        super(props);
        this.max_category_id=this.props.max_category_id;
        this.state={
            mode:'default',
            update_category:0, 
            categories:this.props.data
        }
    }

    showList(){
        var _list=[];
        var temp=Array.from(this.state.categories);
        for (let _data of this.state.categories){
            if(_data.id!==0){
                if(_data.id===this.state.update_category && this.state.mode==='update'){
                    _list.push(
                        <li key={_data.id}>
                            <form method="post"
                                onSubmit={function(e){
                                    e.preventDefault();
                                    if(e.target.title.value!==''){
                                        temp[_data.id].title=e.target.title.value;
                                        this.setState({
                                            mode:'default',
                                            update_category:0,
                                            categories:temp
                                        });
                                    }else{
                                        alert("카테고리 명을 입력해주세요");
                                    }
                                }.bind(this)}
                            >
                                <input
                                    type="text" name="title" placeholder={_data.title}
                                ></input>
                                <button type="submit">확인</button>
                                <button onClick={function(e){
                                    e.preventDefault();
                                    this.setState({mode:'default'});
                                }.bind(this)}>취소</button>
                            </form>
                        </li>
                        );
                }
                else{
                    _list.push(
                        <li key={_data.id}>
                            {_data.title}
                            <button onClick={function(e){
                                e.preventDefault();
                                this.setState({mode:'update', update_category:_data.id});
                            }.bind(this)}>수정</button>
                            <button onClick={function(e){
                                if(window.confirm(_data.title+"을 삭제합니다")){
                                    if(this.props.checkEmpty(_data.id)){
                                        var _categories=this.state.categories;
                                        this.setState({
                                            categories: _categories.filter(cat => cat.id!==_data.id)
                                        });
                                    }else{
                                        alert("카테고리 내 게시글이 존재합니다!");
                                    }
                                }
                            }.bind(this)}>삭제</button>
                        </li>);
                }
            } 
        }
        return _list;
    }

    showCreateForm(){
        var _content=null;
        if (this.state.mode==='create'){
            _content=
            <form
                method="post"
                onSubmit={function(e){
                    e.preventDefault();
                    if(e.target.category.value!==''){
                        this.setState({mode:'default'});
                        this.max_category_id=this.max_category_id+1;
                        var _id=this.max_category_id;
                        var _new=this.state.categories.concat(
                            {id:_id, title:e.target.category.value});
                        this.setState({
                            categories:_new
                        });
                    }else{
                        alert("카테고리 명을 입력해주세요");
                    }
            }.bind(this)}>
                <p>
                <input type="text" name="category" placeholder="새 카테고리 명"></input>
                </p>
                <button type="submit">Submit</button>
            </form>;
        }
        return _content;
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
                    }.bind(this)}>
                    <Link to="/">적용</Link></button>
                <button onClick={function(e){
                    e.preventDefault();
                    this.setState({mode:'create'});
                    }.bind(this)}>새 카테고리 만들기</button>
                {this.showCreateForm()}
            </div>
        )
    }
}

export default SetCategories;