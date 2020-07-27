import React, { Component } from 'react';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from './common/TextValidator'

class AddTodo extends  Component {
  state = {
    content: "",
    error: "",
    temporaryContent: "",
  };

  handleChange = (e) => {
    this.setState({
      id: Math.random(),
      content: e.target.value,
      temporaryContent: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
  };

  render() {
    return (
      <div>
        <ValidatorForm
          ref="form"
          onSubmit={this.handleSubmit}
        >
          <label>Add New Todo</label>
          <TextValidator
            onChange={this.handleChange}
            value={this.state.content}
            validators={['required']}
            errorMessages={['this field is required']}
          />
        </ValidatorForm>
      </div>
    )
  }
}

export default AddTodo;