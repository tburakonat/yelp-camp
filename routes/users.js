const express = require("express")
const router = express.Router();
const passport = require("passport");

const catchAsync = require("../utilities/catchAsync");
const users = require("../controllers/users");

router.route("/register")
    .get(users.renderRegisterForm)
    .post(catchAsync(users.createUser));

router.route("/login")
    .get(users.renderLoginForm)
    .post(passport.authenticate("local", {failureFlash: true, failureRedirect: "/login"}), users.loginUser);

router.get("/logout", users.logoutUser);

module.exports = router;