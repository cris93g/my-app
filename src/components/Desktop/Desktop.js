import React, { Component } from "react";
import { connect } from "react-redux";
import { getDesktop, addToCart } from "../../redux/ducks/itemsReducer";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height: 100%;
  align-items: center;
`;

const CardContainer = styled.section`
  display: inline-block;
  margin: 0 auto;
  padding: 3px;
  perspective: 900px;
  box-shadow: 100px;
  text-align: center;
`;
const Card = styled.section`
@media (max-width: 640px) {
  position: relative;
  width: 300px;
  height: 260px;
  transition: all 0.6s ease;
  transform-style: preserve-3d;}
`;

const Front = styled.section`
@media (max-width: 550px) {
  background: #bbbab9;
  font-size: 12px;}
`;
const Back = styled.section`
@media (max-width: 550px) {
  background: #bbbab9;
  font-size: 14px;
  transform: rotateY(180deg);}
`;

class Items extends Component {
  componentDidMount() {
    this.props.getDesktop();
  }
  render() {
    const { isLoading, items } = this.props;

    const itemsDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      items.map(item => {
        return (
          <div className="Containers">
            <Wrapper>
              <CardContainer className="card-container">
                <Card className="card">
                  <Front className="front">
                    <div className="card-img">
                      <img src={item.img_url} />
                    </div>
                    <div className="card-body">
                      <h3>{item.name}</h3>
                    </div>
                  </Front>
                  <Back className="back">
                    <ul>
                      <li>{item.description}</li>{" "}
                      <li className="price">{item.price}</li>
                    </ul>

                    <Link to="/Cart">
                      <button
                        className="prod-button"
                        onClick={() => this.props.addToCart(item.item_id)}
                      >
                        Buy now!
                      </button>
                    </Link>
                  </Back>
                </Card>
              </CardContainer>
            </Wrapper>
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

export default connect(
  mapStateToProps,
  { getDesktop, addToCart }
)(Items);
