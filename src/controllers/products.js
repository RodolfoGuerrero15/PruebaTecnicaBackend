const db = require('../models/db')

const getProducts = (req,res)=>{
    query='SELECT * FROM products'
    db.query(query,(data,err)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            res.json(data);
        }
    })
}

module.exports = getProducts