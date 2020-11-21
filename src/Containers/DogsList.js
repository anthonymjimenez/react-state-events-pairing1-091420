import React, { Component } from "react";
import DogCard from "../Components/DogCard";


class DogsList extends Component {
  state = {
    dogCounter: 0
  }
  incrementDogs = (click) => {
    !click && this.setState({ dogCounter: ++this.state.dogCounter})
  }

  handleBark = (setClick, click) => {
    this.incrementDogs(click)
    setClick(click => !click)
  }
  
  genDogs = ({dogs}) => 
    dogs.map((dog) =><><hr/> <br/> <DogCard dog={dog} handleBark={this.handleBark}/> </>)
  
  render() {
    return <div className="list">
      Dog Barks: {this.state.dogCounter}
      {this.genDogs(this.props)}
      </div>;
  }
}

export default DogsList;
