/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope

    let getProfileData = (id, callback) => {
        let query =
            "SELECT users.name, users.id as user_id, users.profile_img, experience.country, experience.experience, experience.img, experience.id as post_id FROM users INNER JOIN experience ON(users.id = experience.user_id) WHERE users.id = ($1)";

        let values = [id];

        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log(error);
                console.log("ERRRRROR AT querying profile data");
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    const insertFollow = (data, callback) => {
        const query =
            "INSERT INTO follow(following_user_id, followed_id, post_id) VALUES($1, $2, $3) RETURNING *";

        const values = [data.following, data.followed, data.postId];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log(error);
                console.log("ERRRRROR AT FOLLLOW");
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    const checkFollowers = (id, profilePageId, callback) => {
        const query =
            "SELECT * FROM follow WHERE following_user_id = ($1) AND followed_id = ($2)";

        const values = [id, profilePageId];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                callback(error, null);
                return;
            }
            if (queryResult.rows.length > 0) {
                callback(null, queryResult.rows);
            } else {
                //console.log("QUERY UNSUCCESSFUL");
                callback(null, null);
            }
        });
    };

    const stopFollowing = (id, callback) => {
        const query =
            "DELETE FROM follow WHERE following_user_id = ($1) AND followed_id = ($2)";
        const values = [id.following, id.followed];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                callback(error, null);
                return;
            }
            if (queryResult.rows.length > 0) {
                callback(null, queryResult.rows);
            } else {
                callback(null, null);
            }
        });
    };

    const viewFollowedPosts = (id, callback) => {
        const query =
            "SELECT users.name, users.profile_img, users.id, experience.country, experience.experience, experience.testimony, experience.img FROM users INNER JOIN experience ON(users.id = experience.user_id) INNER JOIN follow ON(followed_id = experience.user_id) WHERE follow.following_user_id = ($1)";
        const values = [id.currentId];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                callback(error, null);
                return;
            }
            if (queryResult.rows.length > 0) {
                callback(null, queryResult.rows);
            } else {
                callback(null, null);
            }
        });
    };

    return {
        getProfileData: getProfileData,
        insertFollow: insertFollow,
        checkFollowers: checkFollowers,
        stopFollowing: stopFollowing,
        viewFollowedPosts: viewFollowedPosts,
    };
};
