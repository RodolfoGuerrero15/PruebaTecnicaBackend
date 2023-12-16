const express = require("express");
const router = express.Router();
const controller=require("../controllers/orders")
const validateOrderNumber=require('../middleware/validateOrder')
router.use(express.json());

//Route to get all the orders
router.get("/orders", controller.getOrders);

//Route to get a specific order with the id
router.get("/orders/:id", controller.getAnSpescificOrder);
//Route to create an order
router.post("/orders",validateOrderNumber, controller.postNewOrder);
//Route to update an order
router.put("/orders", controller.updateOrder);

//Route to delete an order
router.delete("/orders/:id", controller.deleteOrder);

module.exports = router;
