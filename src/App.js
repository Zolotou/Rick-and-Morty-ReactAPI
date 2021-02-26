import { Component } from "react";
import './App.css';
import List from "./components/List";
import Details from "./components/Details";


class App extends Component {
  constructor() {
    super();
    this.state = {
      ImgUrl: "",
      data: null,
      currentCharacter : ""
    }
    
    this.fetchData = this.fetchData.bind(this);
    this.handleCharacter = this.handleCharacter.bind(this);
  }

  handleCharacter(characterID){
    this.setState({
      ...this.state,
      currentCharacter: characterID
    })
    
  }


  async fetchData (urlAPI) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${urlAPI}`);
    const data = await res.json();  
    return data;

  }
  
  async componentDidMount() {
    const array = new Array(6);
    for(let i = 0; i< array.length; i++){
      array[i] = Math.floor(Math.random() * 671 + 1 );
    }
    console.log(array);
    const result = await this.fetchData(array.join(","));
    console.log(result);
    this.setState({
      ...this.state,
      data : result
    })
  }



  render() {                                                                                                                                           
    return (
      <div className="App">
      <List  data={this.state.data} handleCharacter={this.handleCharacter} />
      <Details characterID={this.state.currentCharacter} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
      </div>
    );
  }
}

export default App;

