var React = require("react");

class Profile extends React.Component {
    render() {
        let profileData = this.props.result || [];
        let userPost;
        let currentIdUser = parseInt(this.props.idOfCurrentUser);
        console.log(currentIdUser);
        let followStatus = this.props.followStatus;
        let profileDataContainer;
        let displayFollowButton;

        let profileDataInfo = profileData[0];
        const resultArr = this.props.result;

        const profileInfo = resultArr.map((result) => {
            return (
                <div className="profile-post">
                    <div className="profile-text-container">
                        <h2 className="visited-country">{result.country}</h2>
                        <p className="travel-description">
                            {result.experience}
                        </p>
                    </div>
                    <div className="profile-image-container">
                        <img className="travel-img" src={result.img} />
                    </div>
                </div>
            );
        });

        profileData.map((data) => {
            //CHECKING TO SEE IF CURRENT USER IS LOOKING AT OWN PROFILE TO REMOVE FOLLOW BUTTON
            if (currentIdUser === data.user_id) {
                displayFollowButton = (
                    <p>
                        <input
                            type="hidden"
                            id="follow-butt"
                            className="follow-button"
                        />
                    </p>
                );

                profileDataContainer = (
                    <div className="profile-data">
                        <img
                            className="profile-picture"
                            src={data.profile_img}
                        />

                        <h1 className="profile-name">{data.name}</h1>

                        <form method="POST" action="/followed-posts">
                            <input
                                type="hidden"
                                name="currentId"
                                value={currentIdUser}
                            />
                            <input
                                className="followed-posts-button"
                                type="submit"
                                value="Posts by people you follow."
                            />
                        </form>
                    </div>
                );
            } else {
                displayFollowButton = (
                    <p>
                        <input
                            type="submit"
                            id="follow-butt"
                            className="follow-button"
                            value={followStatus}
                        />
                    </p>
                );
                profileDataContainer = (
                    <div className="profile-data">
                        <img
                            className="profile-picture"
                            src={data.profile_img}
                        />

                        <h1 className="profile-name">{data.name}</h1>

                        <form method="POST" action="/follow">
                            <input
                                type="hidden"
                                name="following"
                                value={currentIdUser}
                            />
                            <input
                                type="hidden"
                                name="followed"
                                value={data.user_id}
                            />
                            <input
                                type="hidden"
                                name="postId"
                                value={data.post_id}
                            />
                            <input
                                type="hidden"
                                name="followStatus"
                                value={followStatus}
                            />
                            {displayFollowButton}
                        </form>
                    </div>
                );
            }
        });

        // font-family: 'Source Sans Pro', sans-serif;
        // font-family: 'Open Sans Condensed', sans-serif;
        // font-family: 'Barlow Condensed', sans-serif;

        return (
            <html>
                <head>
                    <title></title>
                    <link rel="stylesheet" href="/style.css" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap"
                        rel="stylesheet"
                    />
                </head>
                <body className="profile-page">
                    <div className="nav-container">
                        <ul className="navbar">
                            <li className="nav-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/experiencesform">Post Something</a>
                            </li>
                            <li className="nav-item">
                                <form
                                    method="POST"
                                    action="/logout/?_method=delete"
                                >
                                    <a href="#">
                                        <input
                                            type="submit"
                                            className="logout-button"
                                            value="Logout"
                                        />
                                    </a>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className="profile-container">
                        {profileDataContainer}
                        <div className="user-post">
                            <div className="profile-content">
                                {profileInfo}{" "}
                            </div>
                        </div>
                    </div>

                    <script src="/script.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = Profile;
