const asyncHandler = require("express-async-handler");
const express = require('express');


function AuthUser(req, accessToken, refreshToken, profile, done) {
    // Perform any necessary logic, such as storing user data, before calling 'done'
    return done(null, profile);
}

function isLoggedIn(req, res, next){

    next();
}

const authRole = (roles) => {
    return (req, res, next) => {
    //     if (roles.includes(req.user.role)) {
            next();
    }
        // else {
        //     res.sendstatus(401);
        //     return res.send('Not Allowed');
        // }
    // }
}

const canViewUser = (req, res, next) => {
    // const userId = parseInt(req.params.id)
    // if (req.user.id === userId) {
        next();
    // // }
    // else {
    //     res.sendstatus(401);
    //     return res.send('Not Allowed');
    // }
} 

module.exports = { AuthUser, isLoggedIn, authRole, canViewUser };