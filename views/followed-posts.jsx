var React = require("react");

class FollowedPosts extends React.Component {
    render() {
        let postContent = this.props.result || [];

        let postContainer = postContent.map((result) => {
            let id = parseInt(result.id);
            let link = "/profile/" + id;
            return (
                <div className="profile-post">
                    <div className="profile-text-container">
                        <h2 className="visited-country">{result.country}</h2>
                        <p className="travel-description">
                            {result.experience}
                        </p>
                        <div className="mini-data">
                            <img
                                className="profile-img-sm"
                                src={result.profile_img}
                            />
                            <p className="mini-name">
                                <a className="name-of-user" href={link}>
                                    {result.name}
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="profile-image-container">
                        <img className="travel-img" src={result.img} />
                    </div>
                </div>
            );
        });

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
                <body className="followed-posts">
                    <div className="nav-container">
                        <ul className="navbar">
                            <li className="nav-item white">
                                <a href="/">Home</a>
                            </li>
                            <li className="nav-item white">
                                <a href="/experiencesform">Post Something</a>
                            </li>
                            <li className="nav-item white">
                                <form
                                    method="POST"
                                    action="/logout/?_method=delete"
                                >
                                    <a href="#">
                                        <input
                                            type="submit"
                                            className="logout-button white"
                                            value="Logout"
                                        />
                                    </a>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <div className="followed-posts-container">
                        {postContainer}
                    </div>
                    <span className="credits">
                        Photo by Sven Scheuermeier on Unsplash
                    </span>

                    <script src="/script.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = FollowedPosts;
