import React, { Component } from "react";
import { addToCart } from "../../redux/ducks/itemsReducer";
import axios from "axios";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    axios.get("/api/cart").then(res => {
        console.log(this.state)
      this.setState({ cart: res.data });
    });
  }
  updateQuantity = (id, quantity) => {
    if (quantity > 0) {
      axios
        .put("/api/update/" + id, { quantity })
        .then(res => {
          this.setState({ cart: res.data });
        })
        .catch(console.log);
    } else {
      axios
        .delete(`/api/delete/${id}`)
        .then(res => {
          this.setState({ cart: res.data });
        })
        .catch(console.log);
    }
  };
  render() {
    let cart = this.state.cart.map(item => {
      return (
        <div key={item.id} className="prod_container">
          <ul>
            <li>{item.name}</li>
            <img alt={item.name} height="50px" src={item.img_url} />
            
            <li>
              <span
                onClick={() => this.updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </span>
              {item.quantity}
              <span
                onClick={() => this.updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </span>
              {"            "}
              {"            "}
              <span onClick={() => this.updateQuantity(item.id, 0)}>
                &#128465;
              </span>{" "}
            </li>
            <li>${item.price}</li>
          </ul>
          <hr />
        </div>
      );
    });
    let total = this.state.cart.reduce(
      (tot, cur) => tot + cur.price * cur.quantity,
      0
    );
    return (
      <div className="">
        <div className="cart_container">
          {cart}
          <div className="total">Total: ${total}</div>
        </div>
      </div>
    );
  }
}
export default Cart;