/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope

    let insertExperienceData = (data, id, url, callback) => {
        const queryString =
            "INSERT INTO experience(user_id, country, experience, testimony, img) VALUES($1, $2, $3, $4, $5) RETURNING *";

        let values = [id, data.country, data.description, data.testimony, url];
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
        insertExperienceData: insertExperienceData,
    };
};
