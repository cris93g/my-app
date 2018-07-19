import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getItems } from "../../redux/ducks/itemsReducer";

const FrontPage = props => {
  console.log(props);

  return (
    <div>
      <Link to="/login">
        <p>LOG IN</p>
      </Link>
    </div>
  );
};
const mapStatetoProps = state => state;
export default connect(mapStatetoProps)(FrontPage);
