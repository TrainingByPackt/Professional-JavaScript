import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onDecrement}>-</button>
        <button onClick={this.props.onIncrement}>+</button>
      </div>
    );
  }
}

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <Child
          onIncrement={this.increment.bind(this)}
          onDecrement={this.decrement.bind(this)}
        />
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.querySelector('#app'));
