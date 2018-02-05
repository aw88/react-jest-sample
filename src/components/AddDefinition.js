import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDefinition } from '../actions';

const AddDefinition = ({ dispatch }) => {
  let input;

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!input.value.trim()) return;
    dispatch(addDefinition(input.value.trim()));
    input.value = '';
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input ref={ node => input = node } />
        <button type="submit">
          Add definition
        </button>
      </form>
    </div>
  )
}

export default connect()(AddDefinition);
