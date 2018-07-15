import React, { Component } from "react";
import { connect } from "react-redux";
import { getTablet } from "../../redux/ducks/itemsReducer";
import { Link } from "react-router-dom";

class Items extends Component {
  componentDidMount() {
    this.props.getTablet();
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
                    <br />
                    <Link to="/Cart">
                      <button>Buy now!</button>
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
  { getTablet }
)(Items);
