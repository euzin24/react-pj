import '../Myblog.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SetCategories from './SetCategories';
import ReadList from './ReadList';
import ReadContent from './ReadContent';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';

function Content(props){
    return (
        <div className="section">
            <Switch>
                <Route exact path='/'>
                    <ReadList></ReadList>
                </Route>
                <Route exact path='/setting'>
                    <SetCategories></SetCategories>
                </Route>
                <Route exact path='/create'>
                    <CreateContent></CreateContent>
                </Route>
                <Route exact path='/update/:id'>
                    <UpdateContent></UpdateContent>
                </Route>
                <Route exact path='/:cat_title'>
                    <ReadList></ReadList>
                </Route> 
                <Route exact path='/:cat_title/:id'>
                    <ReadContent></ReadContent>
                </Route>
            </Switch>
        </div>
    )
}
export default Content;