// Run with
// npm run serve example-8-parent-child-react.html
import React from 'react';

import ReactDOM from 'react-dom';

class Child extends React.Component {
  render() {
    return <div>Hello {this.props.who}</div>;
  }
}

class Parent extends React.Component {
  render() {
    return (
      <div>
        <Child who="JavaScript" />
      </div>
    );
  }
}

ReactDOM.render(<Parent />, document.querySelector('#app'));
