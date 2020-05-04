const SALT = "apple pie";
const sha256 = require("js-sha256");

module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let loginPage = (req, res) => {
        if (req.cookies && req.cookies.loggedIn) {
            const loggedIn = req.cookies.loggedIn;
            const name = req.cookies.name;
            const data = {
                loggedIn: loggedIn,
                name: name,
            };
            res.render("home", data);
        } else {
            res.render("login");
        }
    };

    let loginAttempt = (req, res) => {
        let data = {};

        db.login.loginQuery(req.body, (error, loginResult) => {
            if (error) {
                console.log("ERRRRROR AT LOGIN");
                console.log(error);
                return;
            }

            if (loginResult === null) {
                res.redirect("/login");
                return;
            }

            let requestedPassword = sha256(req.body.password);
            if (loginResult[0].password === requestedPassword) {
                let name = loginResult[0].name;
                let user_id = loginResult[0].id;
                let hashedCookie = sha256(SALT + name);
                res.cookie("loggedIn", hashedCookie);
                res.cookie("user_id", user_id);
                res.cookie("name", name);
                res.redirect("/");
            }
        });
    };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        loginPage: loginPage,
        loginAttempt: loginAttempt,
    };
};
