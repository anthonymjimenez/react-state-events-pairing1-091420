import React, { Component } from "react";
import "./App.css";
import DogsList from './Containers/DogsList';
import FormContainer from './Containers/FormContainer';


class App extends Component {
  
  async componentDidMount() {
     let data = await fetch('http://localhost:8000/dogs')
     let response = await data.json()
     this.setState({dogs: response});
    }
  
  state = {
      dogs: []
    }

  setDogs = (newDog) => {
      this.setState({ dogs: [...this.state.dogs, newDog]})
    }

  render() {
    return (
      <div className="app">
        {console.log(this.state.dogs)}
        <FormContainer setDogs={this.setDogs} />
        <DogsList dogs ={this.state.dogs}/>

      </div>
    );
  }
}

export default App;
