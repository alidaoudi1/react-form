import React, { Component } from 'react'

class Form extends Component {

  initialState = {
    name: '',
    job: '',
  }
  state = this.initialState


  handleChange = (event) => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value
    })
  }
  submitForm = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  state = this.initialState
  render() {
    const { name, job } = this.state;
  
    return (
        <form onSubmit={this.submitForm}>
            <label for="name">Name</label>
            <input 
                type="text1" 
                name="name" 
                id="name"
                value={name} 
                onChange={this.handleChange} />
            <label for="job">Job</label>
            <input 
                type="text" 
                name="job" 
                id="job"
                value={job} 
                onChange={this.handleChange} />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}
  
}export default Form;

