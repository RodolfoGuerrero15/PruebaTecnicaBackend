const express= require('express');

app=express();
//Separated routes 
const ordersRouter = require('./routes/orders');
const ordersProductsRouter = require('./routes/orders-products');
const productsRouter = require('./routes/products');

app.use( ordersRouter);
app.use( ordersProductsRouter);
app.use( productsRouter);

app.listen(5000,()=>{console.log('app listening on port 5000')})