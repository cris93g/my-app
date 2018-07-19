import React, { Component } from "react";
import { connect } from "react-redux";
import { getItems } from "../../redux/ducks/itemsReducer";
import { Link } from "react-router-dom";
import "./items.css";
import { Button } from "react-bootstrap";

class Items extends Component {
  componentDidMount() {
    this.props.getItems();
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
                    </ul>

                    <Link to="/Cart">
                      <Button>Buy now!</Button>
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
  return state;
};

export default connect(
  mapStateToProps,
  { getItems }
)(Items);
