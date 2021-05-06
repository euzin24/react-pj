import React from 'react';
import { Link } from 'react-router-dom';

function About(){
    return(
        <React.Fragment>
            <h2> This is About page</h2>
            <Link to='/'>Back</Link>
        </React.Fragment>
    );
}

  export default About;