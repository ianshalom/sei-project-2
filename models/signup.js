const sha256 = require("js-sha256");
/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope

    let insertData = (data, url, callback) => {
        const queryString =
            "INSERT INTO users(name, password, profile_img) VALUES($1, $2, $3) RETURNING *";

        let hashedPassword = sha256(data.password);

        const values = [data.username, hashedPassword, url];
        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR");
                console.log(error);
                callback(error, null);
                return;
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    console.log("Insert Unsuccessful");
                    callback(null, null);
                }
            }
        });
    };

    return {
        signupData: insertData,
    };
};
