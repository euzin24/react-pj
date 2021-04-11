import '../Myblog.css';
import { Component } from 'react';
import ReadList from './ReadList';
import ReadContent from './ReadContent';
import SetCategories from './SetCategories';

class Content extends Component{
    constructor(props){
        super(props);
        this.max_content_id=3;
        this.state={
            mode:'read-list',
            selected_content:null,
            articles:[
                {id:1, cat:1, title:'제목1', content:'내용1'},
                {id:2, cat:2, title:'제목2', content:'내용2'},
                {id:3, cat:2, title:'제목3', content:'내용3'}]
        }
    }

    getContent(){
        var _content=null;
        var _mode=this.props.mode;
        var _catid=this.props.num;
        if (_mode==='read-list'){
            var _data=null;
            _data=this.state.articles;
            _content=<ReadList 
                        num={_catid}
                        mode={_mode}
                        cat_data={this.props.data}
                        data={_data}
                        showContent={function(_id){
                            this.setState({
                                selected_content:_id
                            });
                            this.props.showContent();
                        }.bind(this)}></ReadList>;
        }else if (_mode==='set-cats'){
            var _cats=this.props.data;
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
            _content=<ReadContent
                        cat_data={this.state.categories}
                        article={this.state.articles}
                        id={this.state.selected_content}></ReadContent>
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