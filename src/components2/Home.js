import { Link, useParams } from 'react-router-dom';

function Home(){
    console.log("useParams", useParams());
    return(
        <header>
            <h2> This is Home Page</h2>
            <Link to='/about'>And?</Link>
            <br></br>
            <Link to='/contact'>Contact to</Link>
            <hr></hr>
        </header>
        );
    }

  export default Home;