const express = require("express");
const router = express.Router();
const passport = require("passport");

//routes 

const {successRedirect, failureRedirect} = {
  successRedirect: '/', 
  failureRedirect: '/login'
};

router.get('/google', 
  
  passport.authenticate('google', {
    scope: [ 'email', 'profile'],

  }),
);

router.get("/google/callback",
  
  passport.authenticate("google", {
    
    successRedirect: successRedirect,
    failureRedirect: failureRedirect 

  }),

);

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

module.exports = router;