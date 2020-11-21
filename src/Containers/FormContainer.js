import React, { Component } from "react";
import DogForm from "../Components/DogForm";

class FormContainer extends Component {
  state = {
    breed: "",
    name: "",
    img: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  post = async () => {
    try {
      let post = await fetch("http://localhost:8000/dogs", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      });
      return post.json();
    } catch (error) {
      console.error(error);
    }
  };

  submit = async () => {
    let post = await this.post();
    if (post) {
      this.props.setDogs(post);
    }
  };

  render() {
    return (
      <DogForm
        dogFormValues={this.state}
        submit={this.submit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default FormContainer;
