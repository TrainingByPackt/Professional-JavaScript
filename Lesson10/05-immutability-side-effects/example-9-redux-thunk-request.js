import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(requestHelloWorld());
  }

  render() {
    return (
      <div>
        <p>Message: {this.props.message}</p>
      </div>
    );
  }
}

function requestHelloWorld() {
  return (dispatch, getState) => {
    fetch('https://hello-world-micro.glitch.me')
      .then(response => {
        if (response.ok) {
          return response.text();
        }
      })
      .then(data => {
        dispatch({
          type: 'REQUEST_HELLO_WORLD_SUCCESS',
          message: data
        });
      })
      .catch(error => {
        dispatch({
          type: 'REQUEST_HELLO_WORLD_ERROR',
          error
        });
      });
  };
}

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_HELLO_WORLD_SUCCESS':
      return {
        ...state,
        message: action.message
      };
    case 'REQUEST_HELLO_WORLD_ERROR':
      return {
        ...state,
        message: null,
        error: action.error
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const ConnectedApp = connect(state => state)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.querySelector('#app')
);
