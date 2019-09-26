import React from 'react';

import ReactDOM from 'react-dom';

class Basket extends React.Component {
  constructor() {
    super();
    this.state = {
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
    };
  }

  render() {
    return (
      <div>
        <p>You have {this.state.items.length} items in your basket</p>
        <button onClick={() => this.props.onCheckout(this.state.items)}>
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
      status: 'SHOPPING'
    };
    this.handleCheckout = this.handleCheckout.bind(this);
    this.continueShopping = this.continueShopping.bind(this);
    this.finish = this.finish.bind(this);
  }

  handleCheckout(basket) {
    this.setState({
      status: 'CHECKING_OUT',
      basket
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

  render() {
    return (
      <div>
        {this.state.status === 'CHECKING_OUT' && (
          <div>
            <p>
              You've started checking out with {this.state.basket.length} items.
            </p>
            <button onClick={this.continueShopping}>Continue shopping</button>
            <button onClick={this.finish}>Finish</button>
          </div>
        )}
        {this.state.status === 'SHOPPING' && (
          <Basket onCheckout={this.handleCheckout} />
        )}
        {this.state.status === 'DONE' && <p>Done</p>}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));
