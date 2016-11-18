import React from 'react';


export default class FieldComponent extends React.Component {

  static PropTypes = {
    counter: React.PropTypes.number.isRequired
  }

  render(){
    console.log(8)
    return <p>{this.props.counter}</p>;
  }
}

