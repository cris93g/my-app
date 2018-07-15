import React, { Component } from "react";
import { readCartItems, removeFromCart,clearCart} from "../../redux/ducks/itemsReducer";
import axios from "axios";
import { connect } from 'react-redux';

class Cart extends Component {
  constructor(props){
      super(props)

      this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
      this.props.readCartItems();
  }
  handleClick() {
      this.props.createOrder();
      this.props.clearCart();
  }
  
  render() {
      console.log('cart', this.props.cart); //no touchy
      return (
          <div className="cart-app" >
              <h2 className='title'  >Welcome To Your Cart!</h2>
              <h3 className='sub' >Let's see what you want</h3>
              <div className="cart-map" >
                  {this.props.cart.map((items, i) => {
                      return (
                          <div key={i} className="item">
                              <img src={items.img} alt={items.title} className='product-image' />
                              <p>Item: #{items.item_id}</p>
                              <p>Description: {items.name}</p>
                              <p className="price">Product Price: ${items.price}.00</p>
                              <button className="prod-button" onClick={() => this.props.removeFromCart(items.item_id)} >I changed my mind</button>
                          </div>
                      )
                  })}
              </div>
              <div className= "order-button">
                  <a href='/orders' >
                      <button onClick={this.handleClick}>Submit order</button>
                  </a>
              </div>
          </div>
      )
  }
}
function mapStateToProps(state) {
  console.log("state from Cart", state)
  return {
      items: state.items,
      cart: state.cart,
      // orders: state.orders
  }
}
export default connect(mapStateToProps, { readCartItems, removeFromCart,  clearCart })(Cart);