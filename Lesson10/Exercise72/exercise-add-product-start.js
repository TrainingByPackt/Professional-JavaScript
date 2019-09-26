// Run this with
// npm run serve exercise-4-add-product-start.html
import React from 'react';

import ReactDOM from 'react-dom';

class Basket extends React.Component {
  render() {
    return (
      <div>
        <p>You have {this.props.items.length} items in your basket</p>
        <button onClick={() => this.props.onCheckout(this.props.items)}>
          Proceed to checkout
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
    this.handleCheckout = this.handleCheckout.bind(this);
    this.continueShopping = this.continueShopping.bind(this);
    this.finish = this.finish.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }

  handleCheckout(items) {
    this.setState({
      status: 'CHECKING_OUT',
      basket: {
        items
      }
    });
  }

  continueShopping() {
    this.setState({
      status: 'SHOPPING'
    });
  }

  finish() {
    this.setState({
      status: 'DONE'
    });
  }

  addProduct(product) {
    this.setState({
      basket: {}
    });
  }

  render() {
    return (
      <div>
        {this.state.status === 'CHECKING_OUT' && (
          <div>
            <p>
              You've started checking out with {this.state.basket.items.length}{' '}
              items.
            </p>
            <button onClick={this.continueShopping}>Continue shopping</button>
            <button onClick={this.finish}>Finish</button>
          </div>
        )}
        {this.state.status === 'SHOPPING' && (
          <Basket
            items={this.state.basket.items}
            onCheckout={this.handleCheckout}
          />
        )}
        {this.state.status === 'DONE' && <p>Done</p>}

        {this.state.status === 'SHOPPING' && (
          <div style={{marginTop: 50}}>
            <h2>{this.state.product.name}</h2>
            <p>Price: ${this.state.product.price / 100}</p>
            <button onClick={() => this.addProduct(this.state.product)}>
              Add to Basket
            </button>
          </div>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
