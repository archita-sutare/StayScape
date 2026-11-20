const User = require("../models/user.js");

module.exports.signupGet = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signupPost = async(req, res, next) => {
    try{
        let {username, email, password, role} = req.body;
        // Allow only user or host roles
        if (!["user", "host"].includes(role)) {
            role = "user";
        }
        const newUser = new User({email, username, role});
        const registerdUser = await User.register(newUser, password);
        console.log(registerdUser);
        req.login(registerdUser, (err) =>{
            if(err){
                return next(err);
            }
           req.flash("success", "Welcome to stayScape!");

            if (registerdUser.role === "host") {
                return res.redirect("/listings");
            }

            res.redirect("/listings");
            })
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("./signup");
    }
};


module.exports.loginGet = async(req, res) => {
    res.render("users/login.ejs");
};

module.exports.loginPost = (req, res) =>{
        req.flash("success", "Welcome to stayScape! you are logged in");
        const redirectUrl = res.locals.redirectUrl || "/listings";
        delete req.session.redirectUrl;
        res.redirect(redirectUrl);
};

module.exports.logout = (req, res, next) => {
    req.logout((err) =>{
        if(err){
            return next(err);
        }
        req.flash("success", "You Are Logged Out!");
        res.redirect("/listings");
    })
};