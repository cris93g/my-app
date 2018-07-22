import React, { Component } from "react";
import {
  readCartItems,
  removeFromCart,
  clearCart,
  createOrders
} from "../../redux/ducks/itemsReducer";
import axios from "axios";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Checkout from "../checkout/Checkout";
// import TakeMoney from "../stripe/stripeCheckout";
import styled from "styled-components";
import { Elements, StripeProvider } from "react-stripe-elements";
import StripeCheckoutForm from "../StripeCheckoutForm";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClicks = this.handleClicks.bind(this);
  }
  componentDidMount() {
    this.props.readCartItems();
  }
  handleClick() {
    this.props.createOrders();
  }
  handleClicks() {
    this.props.clearCart();
  }

  render() {
    console.log("cart", this.props.cart);

    return (
      <div className="cart-app">
        <h2 className="title">Welcome To Your Cart!</h2>
        <h3 className="sub">Let's see what you want</h3>
        <div className="cart-map">
          {this.props.cart.map((items, i) => {
            return (
              <div key={i} className="item">
                <img
                  src={items.img_url}
                  alt={items.title}
                  className="product-image"
                />

                <p>Item Name: {items.name}</p>
                <p className="price">Product Price: {items.price}</p>

                <Button
                  className="prod-button"
                  onClick={() => this.props.removeFromCart(items.item_id)}
                >
                  I changed my mind
                </Button>

                <div />
                <hr />
              </div>
            );
          })}
        </div>
        <div className="order-button">
          <Link to="/Cart">
            <Button onClick={this.handleClicks}>Clear cart</Button>
          </Link>
          {/* <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR"> */}
          <div className="example">
            <h1>CHECKOUT</h1>
            <Link to="/Orders">
              <Button onClick={this.handleClick}>Purchase</Button>
            </Link>
            {/* <Elements>
                <StripeCheckoutForm />
              </Elements> */}
          </div>
          {/* </StripeProvider> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state from Cart", state);

  return {
    items: state.items,
    cart: state.cart,
    orders: state.orders
  };
}
export default connect(
  mapStateToProps,
  { readCartItems, removeFromCart, clearCart, createOrders }
)(Cart);
