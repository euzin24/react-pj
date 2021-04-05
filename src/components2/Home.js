import { Link } from 'react-router-dom';

function Home(){
    return(
        <header>
            <h2> This is Home Page</h2>
            <Link to='/about'>And?</Link>
            <hr></hr>
        </header>
        );
    }

  export default Home;