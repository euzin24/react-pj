import { Link, useHistory } from 'react-router-dom';
const date=new Date().toLocaleDateString()+' ';
const time=new Date().toLocaleTimeString();

function Home(){
    //const history=useHistory();
    //console.log(useHistory().location);

    // const date=new Date().toLocaleDateString()+' ';
    // const time=new Date().toLocaleTimeString();
    const new_id=Math.floor((Math.random()*100)-1);
    const path='/param/'+new_id;
    return(
        <header>
            <h2> This is Home Page</h2>
            <Link to='/about'>And?</Link><br></br>
            <Link to='/contact'>Contact to</Link><br></br>
            <Link to={path}>Param Test</Link>
            <p>접속시간: {date} {time}</p>
        </header>
    );
}

export default Home;