/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    // `dbPoolInstance` is accessible within this function scope

    let getAllData = (callback) => {
        let query =
            "SELECT experience.*, users.* FROM experience INNER JOIN users ON(users.id = experience.user_id) ORDER BY experience.id DESC";

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
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

    const getTestimonies = (callback) => {
        const query =
            "SELECT experience.testimony, users.name FROM experience INNER JOIN users ON(users.id = experience.user_id) ORDER BY experience.id DESC LIMIT 3";
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                console.log("ERRRRROROROROROROR HEREEE?");
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
        getAllData: getAllData,
        getTestimonies: getTestimonies,
    };
};
