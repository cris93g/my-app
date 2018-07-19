import React from "react";
import StripeCheckout from "react-stripe-checkout";

export default class heckout extends React.Component {
  onToken = token => {
    fetch("sk_test_Q0eqSZXTX46NuFoaxcqRkXih", {
      method: "POST",
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_kbTE9AmO3uZ9ZZ7qCietF1mP"
      />
    );
  }
}
