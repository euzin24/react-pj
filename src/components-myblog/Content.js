import '../Myblog.css';
import { Component } from 'react';
import ReadList from './ReadList';
import ReadContent from './ReadContent';
import SetCategories from './SetCategories';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';

class Content extends Component{
    constructor(props){
        super(props);
        this.max_content_id=7;
        this.state={
            // mode:'read-list',
            selected_content:null,
            articles:[
                {id:1, cat:1, title:'제목1', content:'내용1'},
                {id:2, cat:2, title:'제목2', content:'내용2'},
                {id:3, cat:2, title:'제목3', content:'내용3'},
                {id:4, cat:1, title:'제목4', content:'내용4'},
                {id:5, cat:1, title:'제목5', content:'내용5'},
                {id:6, cat:1, title:'제목6', content:'내용6'},
                {id:7, cat:1, title:'제목7', content:'내용7'}]
        }
    }

    getCategoryTitle(){
        for(let value of this.props.cats){
            if(value.id===this.props.num){
                var _title=value.title;
                break;
            }
        }
        return _title;
    }

    getContentInfo(){
        var _title=null;
        var _content=null;
        var _id=null;
        var _cat=null;
        this.state.articles.forEach(element =>{
            if(element.id===this.state.selected_content){
                _id=element.id;
                _cat=element.cat;
                _title=element.title;
                _content=element.content;   
            }
        });
        
        return {id:_id, cat:_cat, title:_title, content:_content};
    }

    getContentList(){
        var list=[];
        this.state.articles.forEach(element => {
            if(element.cat===this.props.num || this.props.num===0){
                list.push(element);
            }
        });
        return list;
    }

    getContent(){
        var _content=null;
        var _mode=this.props.mode;
        var _catid=this.props.num;
        if (_mode==='read-list'){
            var _category_title=this.getCategoryTitle();
            _content=<ReadList 
                        num={_catid}
                        mode={_mode}
                        cat_title={_category_title}
                        data={this.state.articles}
                        showContent={function(_id){
                            this.setState({selected_content:_id});
                            this.props.setMode('read-content');
                        }.bind(this)}
                        doCreate={function(){
                            this.props.setMode('create-content');
                        }.bind(this)}></ReadList>;
        }else if (_mode==='set-cats'){
            var _cats=this.props.cats;
            _content=<SetCategories 
                        mode={_mode}
                        data={_cats}
                        max_category_id={this.props.max_category_id}
                        update={function(_content, _max){
                            this.props.updateCategory(_content, _max);
                            alert("Updated!");
                            this.props.setMode('read-list');
                        }.bind(this)}
                        checkEmpty={function(_id){
                            var i=1;
                            this.state.articles.forEach(function(value){
                                if(value.cat===_id){i=0;}
                            });
                            return i;
                        }.bind(this)}></SetCategories>
        }else if (_mode==='read-content'){
            var _title=this.getCategoryTitle();
            var _info=this.getContentInfo();
            var _list=this.getContentList();
            _content=<ReadContent
                        cat_title={_title}
                        article={_info}
                        list={_list}
                        resetSelectedContent={function(id){
                            this.setState({selected_content:id});
                        }.bind(this)}
                        modifyContent={function(){
                            this.props.setMode('update-content')
                        }.bind(this)}
                        deleteContent={function(_id){
                            var _articles=this.state.articles;
                            this.setState({
                                articles: _articles.filter(atcl => atcl.id!==_id)
                            });
                            this.props.setMode('read-list');
                        }.bind(this)}
                        ></ReadContent>
        }else if (_mode==='create-content'){
            _content=<CreateContent
                        cats={this.props.cats}
                        selected_category={this.props.num}
                        createArticle={function(_cat, _title, _content){
                            this.max_content_id = this.max_content_id + 1;
                            var temp = this.state.articles.concat(
                                {id: this.max_content_id, cat:_cat, title:_title, content:_content});
                            this.setState({
                                articles:temp,
                                selected_content:this.max_content_id
                            });
                            this.props.setMode('read-content');
                            this.props.setSelectedCategory(_cat);
                        }.bind(this)}></CreateContent>
        }else if (_mode==='update-content'){
            var _info=this.getContentInfo();
            _content=<UpdateContent
                        cats={this.props.cats}
                        article={_info}
                        updateArticle={function(_cat, _title, _content){
                            var temp=Array.from(this.state.articles);
                            temp.forEach(element => {
                                if(element.id===_info.id){
                                    element.cat=_cat;
                                    element.title=_title;
                                    element.content=_content;
                                }
                            });
                            this.setState({articles:temp});
                            this.props.setMode('read-content');
                            this.props.setSelectedCategory(_cat);
                        }.bind(this)}
                        ></UpdateContent>
        }
        return _content;
    }

    render(){
        return(
            <div className="section">
                {this.props.mode}
                {this.getContent()}
            </div>
        )
    }
}

export default Content;