require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const massive = require("massive");
const { json } = require("body-parser");
const control = require("./controllers");
const passport = require("passport");
const path = require("path");
const stripe = require("stripe")("sk_test_TwTTlid3GeOG6YPydOjARw4I");
const app = express();
app.use(express.static(__dirname + "/../build"));

app.use(cors());
app.use(json());
app.use(require("body-parser").text());
const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }
  })
);

massive(process.env.CONNECTION_STRING).then(dbinstance => {
  app.set("db", dbinstance);
});
app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
  const db = app.get("db");
  db.getUserByAuthid([user.id])
    .then(response => {
      if (!response[0]) {
        db.addUserByAuthid([user.displayName, user.id, user.picture])
          .then(res => done(null, res[0]))
          .catch(console.log);
      } else return done(null, response[0]);
    })
    .catch(console.log);
});

passport.deserializeUser((user, done) => done(null, user));

app.get("/me", getUser);

app.get(
  "/login",
  passport.authenticate("auth0", {
    // successRedirect: "/",
    // successRedirect: "http://localhost:3000/#/",
    successRedirect: "/#/",
    failureRedirect: "/login"
  })
);

app.post("/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 2000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({ status });
  } catch (err) {
    res.status(500).end();
  }
});

app.get("/api/test", (req, res, next) => {
  res.sendStatus(200);
});
//items
app.get("/api/items", control.getItems);
app.get("/api/desktop", control.getDesktop);
app.get("/api/laptop", control.getLaptop);
app.get("/api/Hardware", control.getHardware);
app.get("/api/tablet", control.getTablet);
app.get("/api/acessory", control.getAcessory);

app.get("/api/cart/", control.getItemsOnCart);
app.post("/api/cart/:item_id", control.addToCart);
app.delete("/api/cart/:id", control.removeFromCart);
app.put("/api/cart", control.clearCart);
app.get("/api/Orders", control.getItemsOnOrders);
app.post("/api/Orders", control.createOrderOnCart);

const PORT = process.env.PORT || 3001;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, ">./build/index.html"));
});
app.listen(PORT, () => {
  console.log(`EYYY LETS GO IM AT PORT ${PORT}`);
});
