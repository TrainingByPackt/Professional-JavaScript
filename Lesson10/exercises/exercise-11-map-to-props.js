// Run with
// npm run server exercise-2-map-to-props.html
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

class App extends React.Component {
  render() {
    const {items, status, product} = this.props;
    return (
      <div>
        {status === 'CHECKING_OUT' && (
          <div>
            <p>You've started checking out with {items.length} items.</p>
            <button onClick={this.props.continueShopping}>
              Continue shopping
            </button>
            <button onClick={this.props.finish}>Finish</button>
          </div>
        )}
        {status === 'SHOPPING' && (
          <Basket
            items={items}
            renderItem={item => (
              <div>
                x{item.quantity} - {item.name} - $
                {(item.price / 100).toFixed(2)} each{' '}
              </div>
            )}
            onCheckout={this.props.handleCheckout}
          />
        )}
        {status === 'DONE' && <p>Done</p>}

        {status === 'SHOPPING' && (
          <div style={{marginTop: 50}}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price / 100}</p>
            <button onClick={() => this.props.addProduct(product)}>
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

const selectBasketItems = state =>
  (state && state.basket && state.basket.items) || [];

const selectStatus = state => state && state.status;
const selectProduct = state => state && state.product;

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

const mapStateToProps = state => {
  return {
    items: selectBasketItems(state),
    status: selectStatus(state),
    product: selectProduct(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCheckout(items) {
      dispatch(startCheckout(items));
    },
    continueShopping() {
      dispatch(continueShopping());
    },
    finish() {
      dispatch(done());
    },
    addProduct(product) {
      dispatch(addProduct(product));
    }
  };
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.querySelector('#app')
);
