const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
const userController = require("../controllers/users.js");

router.route("/signup")
    .get(userController.signupGet)
    .post(wrapAsync(userController.signupPost)
);


router.route("/login")
    .get(userController.loginGet)
    .post(
        saveRedirectUrl,
        passport.authenticate( "local", {
            failureRedirect: '/login', failureFlash: true
        }), 
        userController.loginPost
    );

router.get(
    "/host/dashboard",
    require("../middleware.js").isLoggedIn,
    require("../middleware.js").isHost,
    wrapAsync(userController.hostDashboard)
);

router.get(
    "/host/listings",
    require("../middleware.js").isLoggedIn,
    require("../middleware.js").isHost,
    wrapAsync(userController.myListings)
);

router.get("/logout", userController.logout);


module.exports = router;