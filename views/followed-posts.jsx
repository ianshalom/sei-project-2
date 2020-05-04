var React = require("react");

class FollowedPosts extends React.Component {
    render() {
        let postContent = this.props.result || [];

        return (
            <html>
                <head>
                    <title></title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body className="followed-posts">
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

                    <script src="/script.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = FollowedPosts;
