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

    const insertFollow = (id, callback) => {
        const query =
            "INSERT INTO follow(following_user_id, followed_id, post_id) VALUES($1, $2, $3) RETURNING *";

        const values = [id.following, id.followed, id.postId];
        dbPoolInstance.query(query, values, (error, queryResult) => {
            if (error) {
                console.log(error);
                console.log("ERRRRROR AT FOLLLOW");
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

    return {
        getProfileData: getProfileData,
        insertFollow: insertFollow,
    };
};
