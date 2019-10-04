const express = require('express');
const router = express.Router();
var Land = require('../models/land');

router.post('/filter', function(req, res, next) {
    var address = req.body.address;
    Land.find({ "address" : { $regex: "/" + address + "/", $options: 'i'  }})
    // .populate('user','name email')
    .exec(function(err, person) {
        console.log(person);
        // do something.
        // variable `person` contains the final populated data
    });
  });

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


router.get('/search', function(req,res){
    var regex = new RegExp('col', 'i');  // 'i' makes it case insensitive
    return Land.find({district: regex}, function(err,q){
        return res.send(q);
    });
});

  
  
  module.exports = router;