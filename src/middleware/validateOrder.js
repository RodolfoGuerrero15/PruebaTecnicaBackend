const db = require('../models/db')

const validateOrderNumber = (req,res,next)=>{
    
    order_number=req.body.order_number
    const query = "SELECT * FROM orders WHERE order_number = ?";
  db.query(query, [order_number], (err, results) => {

    if (results.length === 1) {
        res.json({err:"This order number already exists"})
    }
    else{
        next();
    }
  });
}
module.exports= validateOrderNumber