// Run with
// npm run server exercise-1-refactor-action-creators-start.html
import React from 'react';

import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {createStore} from 'redux';

class Basket extends React.Component {
  render() {
    return (
      <div>
        <p>You have {this.props.items.length} items in your basket</p>
        <div>{this.props.items.map(item => this.props.renderItem(item))}</div>
        <button onClick={() => this.props.onCheckout(this.props.items)}>
          Proceed to checkout
        </button>
      </div>
    );
  }
}

const selectBasketItems = state =>
  (state && state.basket && state.basket.items) || [];

class App extends React.Component {
  constructor() {
    super();
    this.handleCheckout = this.handleCheckout.bind(this);
    this.continueShopping = this.continueShopping.bind(this);
    this.finish = this.finish.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  handleCheckout(items) {
    this.props.dispatch(startCheckout(items));
  }

  continueShopping() {
    this.props.dispatch(continueShopping());
  }

  finish() {
    this.props.dispatch(done());
  }

  addProduct(product) {
    this.props.dispatch(addProduct(product));
  }

  render() {
    // Full state in currently in props
    const items = selectBasketItems(this.props);
    return (
      <div>
        {this.props.status === 'CHECKING_OUT' && (
          <div>
            <p>You've started checking out with {items.length} items.</p>
            <button onClick={this.continueShopping}>Continue shopping</button>
            <button onClick={this.finish}>Finish</button>
          </div>
        )}
        {this.props.status === 'SHOPPING' && (
          <Basket
            items={items}
            renderItem={item => (
              <div>
                x{item.quantity} - {item.name} - $
                {(item.price / 100).toFixed(2)} each{' '}
              </div>
            )}
            onCheckout={this.handleCheckout}
          />
        )}
        {this.props.status === 'DONE' && <p>Done</p>}

        {this.props.status === 'SHOPPING' && (
          <div style={{marginTop: 50}}>
            <h2>{this.props.product.name}</h2>
            <p>Price: ${this.props.product.price / 100}</p>
            <button onClick={() => this.addProduct(this.props.product)}>
              Add to Basket
            </button>
          </div>
        )}
      </div>
    );
  }
}

const defaultState = {
  status: 'SHOPPING',
  product: {
    price: 499,
    name: 'Biscuits'
  },
  basket: {
    items: [
      {
        quantity: 1,
        price: 199,
        name: 'Soda bottle'
      },
      {
        quantity: 2,
        price: 2499,
        name: 'Kitchenware kits'
      }
    ]
  }
};

const START_CHECKOUT = 'START_CHECKOUT';
const CONTINUE_SHOPPING = 'CONTINUE_SHOPPING';
const DONE = 'DONE';
const ADD_PRODUCT = 'ADD_PRODUCT';

function startCheckout(items) {
  return {
    type: START_CHECKOUT,
    basket: {
      items
    }
  };
}

function continueShopping() {
  return {
    type: CONTINUE_SHOPPING
  };
}

function done() {
  return {
    type: DONE
  };
}

function addProduct(newProduct) {
  return {
    type: ADD_PRODUCT,
    newProduct: {
      ...newProduct,
      quantity: 1
    }
  };
}

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case START_CHECKOUT:
      return {
        ...state,
        status: 'CHECKING_OUT'
      };
    case CONTINUE_SHOPPING:
      return {
        ...state,
        status: 'SHOPPING'
      };
    case DONE:
      return {
        ...state,
        status: 'DONE'
      };
    case ADD_PRODUCT:
      return {
        ...state,
        basket: {
          items: selectBasketItems(state).concat(action.newProduct)
        }
      };
    default:
      return state;
  }
};

const store = createStore(appReducer);
const ConnectedApp = connect(state => state)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.querySelector('#app')
);
