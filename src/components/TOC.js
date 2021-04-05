import { Component } from 'react';

class TOC extends Component{
    // concat을 쓰는 이유: 낭비되는 렌더 호출을 막기위해.
    // shouldComponentUpdate 메소드는 newProps, newState 파라미터로
    // 변경된 값(new-)과 이전 값(this.props)을 구분해 낼 수 있는데,
    // 만약 state에 값이 push로 추가된다면 원본 데이터를 건드려
    // 변경사항을 발견할 수 없으므로 이러한 효율성을 기대할 수 없다 
    
    //immutable을 사용한다면 이러한 불편을 축소시킬 수 있음
    shouldComponentUpdate(newProps, newState){
      if (this.props.data===newProps.data){
        return false;
      }
      return true;
    }
    render(){
      console.log("TOC render")
      var lists=[];
      var data=this.props.data;
      var i=0;
      while(i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/+data[i].id"}
                 onClick={function(id, e){
                e.preventDefault();
                this.props.onChangePage(id);
              }.bind(this, data[i].id)}>
            {data[i].title}</a>
          </li>);
        i=i+1;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

  export default TOC