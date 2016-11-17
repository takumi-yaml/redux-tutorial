import React, { PropTypes } from 'react'
import FieldComponent from '../components/FieldComponent';
import ButtonComponent from '../components/ButtonComponent';


export default class App extends React.Component {

  render(){
    console.log('App')
    return (
        <div>
          <ButtonComponent onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} />
          <FieldComponent counter={this.props.counter} />
        </div>
    );
  }
}

