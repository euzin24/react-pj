import { Link } from 'react-router-dom';

    function About(){
        return(
            <header>
            <h2> This is About page</h2>
            <Link to='/'>Back to</Link>
            <hr></hr>
            </header>
        );
    }

  export default About;