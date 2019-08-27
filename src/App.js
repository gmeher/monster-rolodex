import React from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state  = {

      originalMonsters: [],

      monsters : [
        {
          id: 1,
          name: "adfadszbbnfa asd"
        },
        {
          id: 2,
          name: "adadgfadsfa asd"
        },
        {
          id: 3,
          name: "adfaasfdsfa asd"
        },
        {
          id: 4,
          name: "adfadsdsfa asd"
        },
      ]
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState({
      monsters : json,
      originalMonsters: json
    }))
  }

  handleSearchChange = (e)=>{
    console.log(e.target.value);

    var newMonsters = this.state.originalMonsters.filter(monster => monster.name.toLowerCase().includes(e.target.value.toLowerCase()))

    this.setState({monsters: newMonsters});
  }



  render(){

    return(

      <div className="App">

        <h1 className = "App-header"> Monster- Rolodex </h1>
        <SearchBox handleChange = {this.handleSearchChange}></SearchBox>
        

        <CardList monsters = {this.state.monsters} > </CardList>
      </div>


    )
     
    
  }

}

export default App;
