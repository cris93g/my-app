// var stripe = require("stripe")("sk_test_Q0eqSZXTX46NuFoaxcqRkXih");
// const keyPublishable = process.env.PUBLISHABLE_KEY;
// const keySecret = process.env.SECRET_KEY;
// app.set("view engine", "pug");
// app.use(require("body-parser").urlencoded({ extended: false }));

// // var customer = await stripe.customers.create(
// //   { email: 'customer@example.com' }
// // );

// app.get("/", (req, res) => res.render("index.pug", { keySecret }));

// app.post("/charge", (req, res) => {
//   let amount = 500;

//   stripe.customers
//     .create({
//       email: req.body.stripeEmail,
//       source: req.body.stripeToken
//     })
//     .then(customer =>
//       stripe.charges.create({
//         amount,
//         description: "1000",
//         currency: "usd",
//         customer: customer.id
//       })
//     )
//     .then(charge => res.render("charge.pug"));
// });