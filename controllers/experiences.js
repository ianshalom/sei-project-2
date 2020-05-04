var multer = require("multer");
var upload = multer({ dest: "./uploads/" });
var cloudinary = require("cloudinary").v2;

module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let experiencesPage = (req, res) => {
        res.render("experiences");
    };

    let inputForm = (req, res) => {
        cloudinary.config({
            cloudinary_url: process.env.CLOUDINARY_URL,
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        cloudinary.uploader.upload(req.file.path, function (error, result) {
            if (error) {
                console.log("ERRRROR HEREEEE");
                console.log(error);
                return;
            }
            let profileImgUrl = result.secure_url;
            let user_id = req.cookies.user_id;
            db.experiences.insertExperienceData(
                req.body,
                user_id,
                profileImgUrl,
                (error, dataResult) => {
                    if (error) {
                        console.log("ERRRRROR AT SIGNUP");
                        console.log(error);
                        return;
                    }
                    console.log(dataResult);
                    console.log("---------- DATA ------------");
                    res.redirect("/");
                }
            );
        });
    };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        formInput: experiencesPage,
        inputForm: inputForm,
    };
};
