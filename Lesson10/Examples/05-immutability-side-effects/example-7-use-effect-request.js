import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    if (!message) {
      fetch('https://hello-world-micro.glitch.me')
        .then(response => {
          if (response.ok) {
            return response.text();
          }
        })
        .then(data => {
          setMessage(data);
        });
    }
  });
  return (
    <div>
      <p>Message: {message}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
