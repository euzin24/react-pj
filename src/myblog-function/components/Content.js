import '../Myblog.css';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import SetCategories from './SetCategories';
import ReadList from './ReadList';
import ReadContent from './ReadContent';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';

function Content(props){
    // let max_content_id=7;
    const [maxCon, setMaxCon]=useState(7);
    const [selectedCon, setSelectedCon] = useState(null);
    const [articles, setArticles] = useState([
        {id:1, cat:1, title:'제목1', content:'내용1'},
        {id:2, cat:2, title:'제목2', content:'내용2'},
        {id:3, cat:2, title:'제목3', content:'내용3'},
        {id:4, cat:1, title:'제목4', content:'내용4'},
        {id:5, cat:1, title:'제목5', content:'내용5'},
        {id:6, cat:1, title:'제목6', content:'내용6'},
        {id:7, cat:1, title:'제목7', content:'내용7'}
    ]);

    const getCategoryTitle=()=>{
        for(let value of props.cats){
            if(value.id===props.selected_cat){
                var _title=value.title;
                break;
            }
        }
        return _title;
    }

    const getContentInfo=()=>{
        var _title=null;
        var _content=null;
        var _id=null;
        var _cat=null;
        articles.forEach(element =>{
            if(element.id===selectedCon){
                _id=element.id;
                _cat=element.cat;
                _title=element.title;
                _content=element.content;   
            }
        });
        return {id:_id, cat:_cat, title:_title, content:_content};
    }
    
    const getContentList=()=>{
        let list=[];
        articles.forEach(element => {
            if(element.cat===props.selected_cat || props.selected_cat===0){
                list.push(element);
            }
        });
        return list;
    }

    const getContent=()=>{
        let _cats=props.cats;
        let _cat_id=props.selected_cat;
        let _info=getContentInfo();
        let _list=getContentList();
        let _category_title=getCategoryTitle();

        return (
        <Switch>
            <Route exact path='/'>
                <div>Landing Page</div>
            </Route>
            <Route exact path='/setting'>
                <SetCategories 
                    data={_cats}
                    max_category_id={props.max_category_id}
                    update={(_content, _max)=>{
                        props.updateCategory(_content, _max);}}
                    checkEmpty={(_id)=>{
                        var i=1;
                        articles.forEach((value)=>{
                            if(value.cat===_id){i=0;}
                        });
                        return i;
                    }}></SetCategories>
            </Route>
            <Route exact path='/create'>
                <CreateContent
                    cats={_cats}
                    selected_category={_cat_id}
                    max_content_id={maxCon}
                    createArticle={(_cat, _title, _content)=>{
                        var _max=maxCon+1;
                        setMaxCon(_max);
                        var temp = articles.concat(
                            {id: _max, cat:_cat, title:_title, content:_content});
                        setArticles(temp);
                        setSelectedCon(_max);
                        props.setSelectedCategory(_cat);
                }}></CreateContent>
             </Route>
             <Route exact path='/update/:id'>
                <UpdateContent
                    cats={props.cats}
                    article={_info}
                    updateArticle={(_cat, _title, _content)=>{
                        var temp=Array.from(articles);
                        temp.forEach(element => {
                            if(element.id===_info.id){
                                element.cat=_cat;
                                element.title=_title;
                                element.content=_content;
                            }
                        });
                        setArticles(temp);
                        props.setSelectedCategory(_cat);
                    }}></UpdateContent>
             </Route>
            <Route exact path='/:cat_title'>
                <ReadList
                     cat_id={_cat_id}
                     cat_title={_category_title}
                     data={articles}
                     showContent={(_id)=>{
                         setSelectedCon(_id);}}></ReadList>
             </Route> 
             <Route exact path='/:cat_title/:id'>
                <ReadContent
                    article={_info}
                    list={_list}
                    resetSelectedContent={(id)=>{
                        setSelectedCon(id);
                    }}
                    deleteContent={(_id)=>{
                        var _articles=articles;
                        setArticles(_articles.filter(atcl => atcl.id!==_id));
                    }}></ReadContent>
             </Route>
        </Switch>
        );
    }

    return (
        <div className="section">
            {getContent()}
        </div>
    )
}
export default Content;