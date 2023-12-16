const db = require('../models/db')

const getProductsFromOrder = (req,res)=>{
    orderNumber=req.params.id
    query='SELECT order_products.*, products.name AS name, products.unit_price AS unit_price FROM order_products  JOIN products ON order_products.product_id = products.product_id WHERE order_number = ?'
    db.query(query,orderNumber,(data,err)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            console.log(data)
            res.json(data);
        }
    })
}
const postProductsFromOrder = (req,res)=>{
    products=req.body.products
    order_number=req.body.order_number
    
    let i=0;
    while(i<products.length){
        product=products[i];
        db.query('INSERT INTO order_products (order_number,product_id, quantity,total_price) VALUES (?,?,?,?)',[order_number,product.product_id,product.quantity,product.total_price],(err)=>{
            if(err){
                console.log(err)
                res.send(err)
                return;
            }
        })
        i++;
    }
    res.send("Products from order added succesfully")
}

const deleteProductsFromOrder = (req,res)=>{
    orderNumber=req.params.id;
    db.query('DELETE FROM order_products where order_number= ?',orderNumber,(err)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.send("Data deleted succesfully")
        }
    })
}

module.exports={
    getProductsFromOrder,
    postProductsFromOrder,
    deleteProductsFromOrder
}