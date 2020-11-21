import React, { Component } from "react";

class DogForm extends Component {
  render() {
    const { name, breed, img, handleChange, submit } = this.props;

    const localHandle = (event) => {
      handleChange(event);
    };

    const localSubmit = (event) => {
      event.preventDefault();
      submit();
    };
    return (
      <form onSubmit={localSubmit}>
        <input type="text" value={name} name="name" onChange={localHandle} />
        <input type="text" value={breed} name="breed" onChange={localHandle} />
        <input type="text" value={img} name="img" onChange={localHandle} />
        <button>Submit</button>
      </form>
    );
  }
}

export default DogForm;
