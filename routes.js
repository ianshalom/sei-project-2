var multer = require("multer");
var upload = multer({ dest: "./uploads/" });

require("dotenv").config();

module.exports = (app, allModels) => {
    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *    ALL ROUTES FOR POKEMON CONTROLLER
     *  =========================================
     *  =========================================
     *  =========================================
     */

    const homeControllerCallbacks = require("./controllers/home")(allModels);

    const loginControllerCallbacks = require("./controllers/login")(allModels);

    const signupControllerCallbacks = require("./controllers/signup")(
        allModels
    );

    const formControllerCallbacks = require("./controllers/experiences")(
        allModels
    );
    const profileControllerCallbacks = require("./controllers/profile")(
        allModels
    );

    app.get("/", homeControllerCallbacks.homepage);
    app.get("/login", loginControllerCallbacks.loginPage);
    app.get("/signup", signupControllerCallbacks.signupPage);
    app.get("/experiencesform", formControllerCallbacks.formInput);
    app.get("/profile/:id", profileControllerCallbacks.profilePage);

    app.post("/follow", profileControllerCallbacks.followUser);

    app.post(
        "/signupUser",
        upload.single("myFile"),
        signupControllerCallbacks.signupInfo
    );

    app.post("/userLogin", loginControllerCallbacks.loginAttempt);
    app.post(
        "/experiencesForm",
        upload.single("myFile"),
        formControllerCallbacks.inputForm
    );

    app.delete("/logout", (req, res) => {
        res.clearCookie("loggedIn");
        res.clearCookie("user_id");
        res.clearCookie("name");
        res.redirect("/");
    });
};
