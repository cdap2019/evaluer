const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
router.post('/register', (req, res, next) => {
  let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err) {
      res.json({success: false, msg: 'Failed to register user'});
    } else {
      res.json({success: true, msg: 'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

// Current Price
router.post('/send_current', (req, res) => {

  var PythonShell = require('python-shell');

  var options = {
      mode: 'text',
      pythonPath: 'python',
      pythonOptions: ['-W ignore'],
      scriptPath: '.',
      args: [req.body.lat, req.body.lng]
  };
  PythonShell.PythonShell.run('current_price.py', options, function (err, results) {
      if (err)
          throw err;
      // Results is an array consisting of messages collected during execution

      console.log('results: %j', results);
      res.status(200).json(results);
  });

});

router.post('/send_future', (req, res) => {
  // console.log(req.body.av[0]);
  // res.status(200).json('success');
  var PythonShell = require('python-shell');

  var options = {
      mode: 'text',
      pythonPath: 'python',
      pythonOptions: ['-W ignore'],
      scriptPath: '.',
      args: [req.body.nu[0], req.body.av[0], req.body.nu[1], req.body.av[1], req.body.nu[2],req.body.av[2],
      req.body.nu[3],req.body.av[3],req.body.nu[4],req.body.av[4],req.body.current]
  };
  PythonShell.PythonShell.run('future_price.py', options, function (err, results) {
      if (err)
          throw err;
      // Results is an array consisting of messages collected during execution

      console.log('results: %j', results);
      res.status(200).json(results);
  });

});
router.post('/send_data_10_year', (req, res) => {
  // console.log(req.body.minimum_distance_list[1]);
  var PythonShell = require('python-shell');

  var options = {
      mode: 'text',
      pythonPath: 'python',
      pythonOptions: ['-W ignore'],
      scriptPath: '.',
      args: [req.body.minimum_distance_list[0], req.body.minimum_distance_list[1], 
      req.body.minimum_distance_list[2], req.body.distance, req.body.lat, req.body.lng]
  };
  console.log(req.body.minimum_distance_list[0]);
  PythonShell.PythonShell.run('10_year.py', options, function (err, results) {
      if (err)
          throw err;
      // Results is an array consisting of messages collected during execution

      console.log(results);
      res.status(200).json(results);
  });
})

module.exports = router;
