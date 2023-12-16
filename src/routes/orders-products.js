const express = require("express");
const router = express.Router();
const controller=require('../controllers/orders-products')
router.use(express.json());

router.get('/orders-products/:id',controller.getProductsFromOrder)
router.post('/orders-products',controller.postProductsFromOrder)
router.delete('/orders-products/:id',controller.deleteProductsFromOrder)
    
  
module.exports= router
