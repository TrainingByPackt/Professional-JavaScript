import React from 'react';
import ReactDOM from 'react-dom';

function Hello({who}) {
  return <p>Hello {who}</p>;
}

const App = () => (
  <>
    <Hello who="Function Components!" />
  </>
);

ReactDOM.render(<App />, document.querySelector('#app'));
