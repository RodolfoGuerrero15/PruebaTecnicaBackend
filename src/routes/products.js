const express = require("express");
const router = express.Router();
const controller=require('../controllers/products')
router.use(express.json());

router.get('/products',controller)

module.exports=router