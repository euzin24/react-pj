import React, { useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

function Param(){
    const id=useParams().id;

    // deps로 넘겨준 id값이 변경될 때마다 실행
    // id가 갱신될때마다 리턴함수 호출 후 재실행
    useEffect(()=>{
        console.log(`현재 id 값 ${id}`);
        return()=>{ //=willUnmount
            console.log(`*이전 id 값 ${id}`);
        }
    },[id]);

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