import React, { Component } from "react";

import { connect } from "react-redux";
import { readOrders } from "../../redux/ducks/itemsReducer";

class Orders extends Component {
  componentDidMount() {
    this.props.readOrders();
  }

  render() {
    console.log("orders", this.props.orders);
    return (
      <div className="orders-app">
        <h2 className="title">These Are Your Orders!</h2>
        <h3 className="sub">Details Shown Below</h3>

        <div className="orders-map">
          {this.props.orders.map((items, i) => {
            return items.items_id ? (
              <div key={i} className="item">
                <img
                  src={items.img_url}
                  alt={items.name}
                  className="product-image"
                />
                <p>Item: #{items.item_id}</p>
                <p>Description: {items.name}</p>
                <p className="price">Product Price: ${items.price}.00</p>
              </div>
            ) : null;
          })}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("state from Orders", state);
  return {
    cart: state.cart,
    products: state.products,
    orders: state.orders
  };
}

export default connect(
  mapStateToProps,
  { readOrders }
)(Orders);
