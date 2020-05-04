module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let profilePage = (req, res) => {
        let data = {};
        let queryId = parseInt(req.params.id);
        let followStatus;

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
            let profilePageId = result[0].user_id;

            db.profile.checkFollowers(
                idOfCurrentUser,
                profilePageId,
                (error, followResult) => {
                    if (error) {
                        console.log("ERRRRROR AT QUERY FOR PROFILE DATA");
                        console.log(error);
                        return;
                    }
                    console.log(followResult);
                    console.log("RESULT OF WHO FOLLOWS WHO");
                    if (followResult != null) {
                        followStatus = "Unfollow";
                    } else {
                        followStatus = "Follow";
                    }
                    data = {
                        result,
                        idOfCurrentUser,
                        followStatus,
                    };
                    console.log(data);
                    console.log("----------data-----------");
                    res.render("profile", data);
                }
            );
        });
    };

    const followUser = (req, res) => {
        console.log(req.body);
        let id = parseInt(req.body.followed);
        let link = "/profile/" + id;
        console.log(link);

        if (req.body.followStatus === "Unfollow") {
            db.profile.stopFollowing(req.body, (error, result) => {
                if (error) {
                    console.log("ERRRRROR with deleting follower");
                    console.log(error);
                    return;
                }
                console.log("UNFOLLOWED");
                res.redirect(link);
            });
        } else {
            db.profile.insertFollow(req.body, (error, result) => {
                if (error) {
                    console.log("ERRRRROR AT QUERY FOR PROFILE DATA");
                    console.log(error);
                    res.redirect("/");
                    return;
                }

                console.log(result);
                console.log("FOLLLLLOWED");
            });
            res.redirect(link);
        }
    };

    const displayFollowedPosts = (req, res) => {
        console.log("-----------");
        console.log(req.body.currentId);
        console.log("-----------");

        db.profile.viewFollowedPosts(req.body, (error, result) => {
            if (error) {
                console.log("ERRRRROR AT QUERY FOR PROFILE DATA");
                console.log(error);
                return;
            }
            console.log(result);
            console.log("RESULT OF FOLLOWED POSTS");
            const data = {
                result,
            };
            res.render("followed-posts", data);
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
        displayFollowedPosts: displayFollowedPosts,
    };
};
