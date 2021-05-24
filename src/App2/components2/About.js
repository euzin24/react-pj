import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About(){
    useEffect(()=>{
        console.log("About Mount");
        return()=>console.log("About Unmount");
      }, [])

    return(
        <React.Fragment>
            <h2> This is About page</h2>
            <Link to='/'>Back</Link>
        </React.Fragment>
    );
}

  export default About;