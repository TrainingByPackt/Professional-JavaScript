import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch('https://hello-world-micro.glitch.me')
      .then(response => {
        if (response.ok) {
          return response.text();
        }
      })
      .then(data => {
        this.setState({
          message: data
        });
      });
  }

  render() {
    return (
      <div>
        <p>Message: {this.state.message}</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
