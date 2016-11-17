import React from 'react';


export default class ButtonComponent extends React.Component {
  static propTypes = {
    onIncrement: React.PropTypes.func.isRequired,
    onDecrement: React.PropTypes.func.isRequired,
  }

  render() {
    return (
        <ul>
          <li>
            <button onClick={this.props.onIncrement}>++</button>
          </li>
          <li>
            <button onClick={this.props.onDecrement}>--</button>
          </li>
        </ul>
    );
  }
}