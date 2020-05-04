module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let profilePage = (req, res) => {
        let data = {};
        let queryId = req.params.id;
        db.profile.getProfileData(queryId, (error, result) => {
            if (error) {
                console.log("ERRRRROR AT QUERY FOR PROFILE DATA");
                console.log(error);
                return;
            }

            if (result === null) {
                res.redirect("/experiencesform");
                return;
            }
            let idOfCurrentUser = req.cookies.user_id;
            data = {
                result,
                idOfCurrentUser,
            };
            console.log(data);
            res.render("profile", data);
        });
    };

    const followUser = (req, res) => {
        let profileIdLink = parseInt(req.body.following);
        console.log(profileIdLink);
        let link = "/profile/" + profileIdLink;
        console.log(link);
        db.profile.insertFollow(req.body, (error, result) => {
            if (error) {
                console.log("ERRRRROR AT QUERY FOR PROFILE DATA");
                console.log(error);
                res.redirect("/");
                return;
            } else if (result === null) {
                res.redirect(link);
                console.log("Result Nulll");
                return;
            }
            console.log(result);
            console.log("FOLLLLLOWED");
            res.redirect(link);
        });
    };
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        profilePage: profilePage,
        followUser: followUser,
    };
};
