import React from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

function Param(){
    const id=useParams().id;

    const onChange = () => {
        const new_id=Math.floor((Math.random()*100)-1);
        return '/param/'+new_id;
    }

    return(
        <React.Fragment>
            Current Page id is {id}
            <p>
                <Link to={onChange}>Again?</Link>
            </p>
            <p>
                <Link to='/'>Back</Link>
            </p>
        </React.Fragment>
            
    );
}

export default Param;