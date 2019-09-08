// Run with
// npm run serve example-10-this-react-issues.html
import React from 'react';
import ReactDOM from 'react-dom';

class Child extends React.Component {
  render() {
    return <div>
      <p><button onClick={() => this.props.withInlineBind('inline-bind')}>inline bind</button></p>
      <p><button onClick={() => this.props.withConstructorBind('constructor-bind')}>constructor bind</button></p>
      <p><button onClick={() => this.props.withArrowProperty('arrow-property')}>arrow property</button></p>
    </div>;
  }
}

class Parent extends React.Component {
  constructor() {
    super();

    this.state = {
      display: 'default'
    };

    this.withConstructorBind = this.withConstructorBind.bind(this);
  }

  // check the render() function
  // for the .bind()
  withInlineBind(value) {
    this.setState({
      display: value
    })
  }

  // check the constructor() function
  // for the .bind()
  withConstructorBind(value) {
    this.setState({
      display: value
    })
  }

  // works as is but needs
  // an experimental JavaScript feature
  withArrowProperty = (value) => {
    this.setState({
      display: value
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.display}</p>
        <Child
          withInlineBind={this.withInlineBind.bind(this)}
          withConstructorBind={this.withConstructorBind}
          withArrowProperty={this.withArrowProperty}
          />

      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.querySelector('#app'));
