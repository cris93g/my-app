import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

class StripeCheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe
      .createToken("bank_account", {
        country: "US",
        currency: "usd",
        routing_number: "110000000",
        account_number: "000123456789",
        account_holder_name: "Jenny Rosen",
        account_holder_type: "individual"
      })
      .then(function(result) {
        // Handle result.error or result.token
      });
    ({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) console.log("Purchase Complete!");
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(StripeCheckoutForm);
