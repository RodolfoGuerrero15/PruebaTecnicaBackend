const db = require("../models/db");

const getOrders = (req, res) => {
  query = "SELECT * FROM orders";
  db.query(query, (data, err) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(data);
    }
  });
};

const getAnSpescificOrder = (req, res) => {
  const id = req.params.id;
  query = "SELECT * FROM orders where order_id = ?";
  db.query(query, id, (data, err) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.json(data);
    }
  });
};

const postNewOrder = (req, res) => {
  const { order_number, final_price, date, num_products } = req.body;
  const order = { order_number, date, final_price, num_products };
  const query = "INSERT INTO orders SET ?";

  db.query(query, order, (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({err:"An error has ocurred"});
    } else {
      res.status(200).json({res:"Order added succesfully"});
    }
  });
};
const updateOrder = (req, res) => {
  const { order_number, final_price, date, num_products } = req.body;
  updatedData = [final_price, date, num_products, order_number];
  console.log(updatedData);
  const query =
    "UPDATE orders SET  final_price = ?, date= ? , num_products = ? WHERE order_number= ?";
  db.query(query, updatedData, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("An error has ocurred");
    } else {
      res.status(200).send("Order updated succesfully");
    }
  });
};
const deleteOrder = (req, res) => {
  const orderId = req.params.id;
  db.query(
    "DELETE from order_products where order_number = ?",
    orderId,
    (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("An error has ocurred");
      } else {
        db.query(
          "DELETE from orders where order_number = ?",
          orderId,
          (err) => {
            if (err) {
              console.log(err);
              res.status(500).send("An error has ocurred");
            } else {
              res.status(200).send("Order deleted succesfully");
            }
          }
        );
      }
    }
  );
};
module.exports = {
  getOrders,
  getAnSpescificOrder,
  postNewOrder,
  updateOrder,
  deleteOrder,
};
