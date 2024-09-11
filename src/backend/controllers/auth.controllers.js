const asyncHandler = require("express-async-handler");
const { User } = require("../models/user");
const { createUser } = require("./users.controllers");

const AuthUser = asyncHandler(async (req, accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
            return done(null, user);
        } else {
            // Create a new user if they don't exist
            const newUser = new User({
                googleId: profile.id,
                displayName: profile.displayName,
                email: profile.emails[0].value,
            });
            
            // Save the new user in the database
            await newUser.save();
            return done(null, newUser);
        }
    } catch (err) {
        return done(err);
    }
});

// Middleware to check if the user is logged in
const isLoggedIn = (req, res, next) => {
    if (!req.user) {
        return res.status(403).send('You need to sign in');
    }
    next();
};

// Middleware to authorize based on user role
const authRole = (roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            return next();
        } else {
            return res.sendStatus(401).send('Not Allowed');
        }
    };
};

// Middleware to check if the logged-in user can view the requested user data
const canViewUser = (req, res, next) => {
    const userId = req.params.id; // Keep userId as string for consistency
    if (req.user.id === userId) {
        return next();
    } else {
        return res.sendStatus(401).send('Not Allowed');
    }
};

module.exports = { AuthUser, isLoggedIn, authRole, canViewUser };