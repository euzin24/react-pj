import '../Myblog.css';
import { Component } from 'react';
import ReadList from './ReadList';
import ReadContent from './ReadContent';
import SetCategories from './SetCategories';

class Content extends Component{
    constructor(props){
        super(props);
        this.max_content_id=7;
        this.state={
            mode:'read-list',
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
        this.state.articles.forEach(element =>{
            if(element.id===this.state.selected_content){
                _id=element.id;
                _title=element.title;
                _content=element.content;   
            }
        });
        
        return {id:_id, title:_title, content:_content};
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
                            this.setState({
                                selected_content:_id
                            });
                            this.props.showContent();
                        }.bind(this)}></ReadList>;
        }else if (_mode==='set-cats'){
            var _cats=this.props.cats;
            _content=<SetCategories 
                        mode={_mode}
                        data={_cats}
                        max_category_id={this.props.max_category_id}
                        update={function(_content, _max){
                            alert("Updated!");
                            this.props.onChange();
                            this.props.updateCategory(_content, _max);
                        }.bind(this)}
                        checkContent={function(_id){
                            var i=1;
                            var temp=Array.from(this.state.articles);
                            temp.forEach(function(value){
                                if(value.cat===_id){i=0;}
                            });
                            return i;
                        }.bind(this)}
                        
                        ></SetCategories>
        }else if (_mode==='read-contents'){
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
                        ></ReadContent>
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