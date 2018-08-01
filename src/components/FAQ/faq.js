import React from "react";

const Faq = props => {
  return (
    <div>
      <h2>F.A.Q</h2>
      <ol>
        <li />
        <li>
          <h4>When will my order arrive?</h4> To estimate the latest date your
          delivery may arrive, look at each item in your Shopping Cart and find
          the one with the longest "Usually ships in" days. Count the days,
          starting with the day you will be placing the order, and count forward
          on the calendar, but DO NOT count Saturday or Sunday. Then, add the
          number of days you chose for having your order shipped and count
          forward on the calendar. Again, DO NOT count Saturday or Sunday.
          (Although USPS does deliver on Saturdays, we cannot guarantee that
          this will occur.) You now have estimated the latest arrival date for
          your delivery.
        </li>
        <li>
          <h4>What are the shipping options?</h4>
          We ship standard, 2-day and overnight in the 48 continental United
          States. International options (standard, economy, priority) and rates
          are applied for Alaska and Hawaii. We apologize that we are
          temporarily unable to ship orders to Canada. For more information, see
          our Shipping Information page. For information on shipping
          restrictions, see our Shipping Restrictions page.
        </li>

        <li>
          <h4>What are my payment options?</h4>
          you can shop using your American Express Card, DiscoverCard,
          MasterCard, VISA, DigitalBuy Credit Card and debit cards. Personal
          checks are accepted at DigitalBuy; stores, provided adequate
          identification is available. "Starter" checks are not accepted. Stores
          do NOT accept personal or business checks drawn on foreign checking
          accounts.
        </li>
        <li>
          <h4>What is your return policy?</h4>
          Returns/exchanges for orders being shipped back require an RMA (Return
          Merchandise Authorization) Number, which is valid for 10 days. To
          obtain an RMA Number, contact Customer Service. Product being returned
          at the retail store does not require RMA- just bring in your packing
          slip. For additional information, see How to Return an Item and read
          our Return Policy.
        </li>
        <li>
          <h4>
            I have a technical concern with this website. What should I do?
          </h4>
          If you have website related issues, contact Customer Service.
        </li>
        <li>
          <h4>
            Which web browsers are recommended for viewing DigitalBuy.net?
          </h4>
          DigitalBuy Online works with most popular browsers on PC and Mac
          including Firefox 10 or higher, Internet Explorer 8 or higher, or
          other compatible browsers that support JavaScript, cookies and Secure
          Sockets Layer protocol (SSL). Using older browsers, non-compatible
          browsers or disabling browser features such as JavaScript, cookies and
          SSL, may reduce site functionality.
        </li>
      </ol>
    </div>
  );
};

export default Faq;
