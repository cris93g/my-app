module.exports = {
  getItems(req, res) {
    const db = req.app.get("db");
    db.getItems()
      
      .then(items => res.status(200).json(items))
      .catch(console.log);
  },
  getDesktop(req, res, next) {
    const db = req.app.get("db");
    db.getDesktop(req.params.item_id)

      .then(items => res.status(200).json(items))
      .catch(err => res.status(500).send({ getDesktopERROR: err }));
  },
  getLaptop(req, res, next) {
    const db = req.app.get("db");
    db.getLaptop()

      .then(items => res.status(200).json(items))
      .catch(err => res.status(500).send({ getLaptopERROR: err }));
  },
  getHardware(req, res, next) {
    const db = req.app.get("db");
    db.getHardware()

      .then(items => res.status(200).json(items))
      .catch(err => res.status(500).send({ getHardwareERROR: err }));
  },
  getTablet(req, res, next) {
    const db = req.app.get("db");
    db.getTablet()

      .then(items => res.status(200).json(items))
      .catch(err => res.status(500).send({ getTabletERROR: err }));
  },
  getAcessory(req, res, next) {
    const db = req.app.get("db");
    db.getAcessory()

      .then(items => res.status(200).json(items))
      .catch(err => res.status(500).send({ getAcessoryERROR: err }));
  },


  addToCart: (req, res, next) => {
    const db = req.app.get('db');
    const {item_id} = req.params;
    db.addToCart([item_id])
    .then(response => {
        res.status(200).send(response)
    }).catch(err => res.status(500).send(err));
},
 

  getItemsOnCart: (req, res, next) => {
    const db = req.app.get('db');
    const {item_id} = req.params
    db.readCartItem([item_id])
    .then(response => {
        res.status(200).send(response)
    }).catch(err => res.status(500).send(err));
},

removeFromCart: (req, res, next) => {
  const db = req.app.get('db');
  const {id} = req.params;
  console.log('testing the delete')
  db.deleteFromCart([id])
  .then(response => {
      res.status(200).send(response)
  }).catch(err => res.status(500).send(err));
},
clearCart: (req, res, next) => {
  console.log('testing the cart clear');
  const db = req.app.get('db');
  console.log('req.body', req.body);
  
  db.clearCart()
  .then(response => {
      res.status(200).send(response)
  }).catch(err => res.status(500).send(err));
}
};
