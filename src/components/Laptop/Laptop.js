import React, { Component } from "react";
import { connect } from "react-redux";
import { getLaptop, addToCart } from "../../redux/ducks/itemsReducer";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

class Items extends Component {
  componentDidMount() {
    this.props.getLaptop();
  }

  render() {
    const { isLoading, items } = this.props;

    const itemsDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      items.map(item => {
        return (
          <div className="Containers">
            <div className="container">
              <div className="card-container">
                <div className="card">
                  <div className="front">
                    <div className="card-img">
                      <img src={item.img_url} />
                    </div>
                    <div className="card-body">
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <div className="back">
                    <ul>
                      <li>{item.description}</li>{" "}
                      <li className="price">{item.price}</li>
                      <li>{item.item_id}</li>
                      <br />
                      <Rating />
                    </ul>
                    <br />
                    <Link to="/Cart">
                      <button
                        className="prod-button"
                        onClick={() => this.props.addToCart(item.item_id)}
                      >
                        Buy now!
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );

    return <div>{itemsDisplay}</div>;
    console.log(itemsDisplay);
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
    cart: state.cart
  };
};
const mapDispatchToProps = {
  addToCart: addToCart
};

export default connect(
  mapStateToProps,
  { getLaptop, addToCart }
)(Items);
