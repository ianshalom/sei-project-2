module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homepage = (req, res) => {
        let data = {};
        db.homeDisplay.getAllData((error, result) => {
            if (error) {
                console.log(error);
                console.log("ERROR AT GETTING ALL DATA");
                res.redirect("/");
                return;
            }

            if (result === null || result === undefined) {
                console.log("RETURN RESULT = NULL");
                res.redirect("/");
                return;
            }

            data["result"] = result;

            if (req.cookies && req.cookies.loggedIn) {
                const loggedIn = req.cookies.loggedIn;
                const name = req.cookies.name;
                let id = req.cookies.user_id;
                data = {
                    loggedIn: loggedIn,
                    name: name,
                    result,
                    id,
                };
                console.log(data);
                res.render("home", data);
            } else {
                res.render("home", data);
            }

            //END OF QUERY
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        homepage: homepage,
    };
};
