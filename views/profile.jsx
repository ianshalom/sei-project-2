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

        profileData.map((data) => {
            userPost = (
                <div className="user-post">
                    <div className="profile-content">
                        <h2 className="visited-country">{data.country}</h2>
                        <p className="travel-description">{data.experience}</p>
                        <img className="travel-img" src={data.img} />
                    </div>
                    <div className="comments-box"></div>
                </div>
            );
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

        return (
            <html>
                <head>
                    <title></title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body className="profile-page">
                    <div className="profile-container">
                        {profileDataContainer}
                        {userPost}
                    </div>

                    <script src="/script.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = Profile;
