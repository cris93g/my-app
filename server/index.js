require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const massive = require("massive");
const { json } = require("body-parser");
const control = require("./controllers");
const passport = require("passport");
const strategy = require("./strat");

const app = express();
app.use(cors());
app.use(json());

massive(process.env.CONNECTION_STRING).then(dbinstance => {
  app.set("db", dbinstance);
});

//auth0
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(strategy);
passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((user, done) => {
  return done(null, user);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/Home#/",
    failureRedirect: "/login",
    failureFlash: true
  })
);

app.get("/me", (req, res, next) => {
  if (!req.user) {
    res.status(500).json({ message: "no user login" });
  } else {
    res.status(200).json(req.user);
  }
});

//test

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

app.get('/api/cart/', control.getItemsOnCart)
app.post('/api/cart/:item_id',control.addToCart);
app.delete('/api/cart/:id',control.removeFromCart);
app.put('/api/cart', control.clearCart);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`EYYY LETS GO IM AT PORT ${PORT}`);
});
