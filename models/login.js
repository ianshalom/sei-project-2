const sha256 = require("js-sha256");

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope

    let loginQuery = (data, callback) => {
        const queryString =
            "SELECT * FROM users WHERE name =($1) AND password = ($2)";
        let requestedHashedPassword = sha256(data.password);
        let values = [data.name, requestedHashedPassword];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR AT LOGIN QUERY");
                console.log(error);
                callback(error, null);
                return;
            }
            if (queryResult.rows.length > 0) {
                if (queryResult.rows[0].password === requestedHashedPassword) {
                    callback(null, queryResult.rows);
                }
            } else {
                console.log("Invalid username or password");
                callback(null, null);
                return;
            }
        });
    };

    return {
        loginQuery: loginQuery,
    };
};
