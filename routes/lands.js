const express = require('express');
const router = express.Router();
const Land = require('../models/land');

// get lands 
router.get('/',(req,res,next)=>{
    Land.find((err,result)=>{
        if(err){
            res.status(404).json({
                err
            })
        }else{
            res.status(200).json(result);
        }
    })
});


// add lands
router.post('/add', (req,res,next)=>{
    let land = new Land({
        user:req.body.user,
        price:req.body.price,
        distance:req.body.distance,
        route:req.body.route,
        index:req.body.index,
        province:req.body.province,
        district:req.body.district, 
        address:req.body.address,
        lat:req.body.lat,
        lon:req.body.lon,
    });
    land.save((err,land)=>{
        if(err){
            res.status(404).json(err);
        }else{
            res.status(201).json({land});
        }
    })
});

  
  
  module.exports = router;