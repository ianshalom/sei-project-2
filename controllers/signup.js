var multer = require("multer");
var upload = multer({ dest: "./uploads/" });
var cloudinary = require("cloudinary").v2;

module.exports = (db) => {
    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let signupPage = (req, res) => {
        res.render("signup");
    };

    let signupInfo = (req, res) => {
        console.log(req.body);
        cloudinary.config({
            cloudinary_url: process.env.CLOUDINARY_URL,
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
        cloudinary.uploader.upload(req.file.path, function (error, result) {
            let profileImgUrl = result.secure_url;
            console.log(profileImgUrl);
            db.signup.signupData(
                req.body,
                profileImgUrl,
                (error, dataResult) => {
                    if (error) {
                        console.log("ERRRRROR AT SIGNUP");
                        console.log(error);
                        return;
                    }

                    res.render("login");
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
        signupPage: signupPage,
        signupInfo: signupInfo,
    };
};
