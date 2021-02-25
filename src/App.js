import { Component } from "react";
import './App.css';
import List from "./components/List";


class App extends Component {
  constructor() {
    super();
    this.state = {
      ImgUrl: "",
      data: null
    }
    
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData () {
    const urlAPI = "https://rickandmortyapi.com/api/character/1,2,3,4,5,6";
    const res = await fetch(urlAPI);
    const data = await res.json();  
    return data;

  }
  
  async componentDidMount() {
    const result = await this.fetchData();
    console.log(result);
    this.setState({
      ...this.state,
      data : result
    })
  }



  render() {  
    console.log(this.state.data);                                                                                                                                            
    return (
      <div className="App">
      <List data={this.state.data} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
      </div>
    );
  }
}

export default App;

