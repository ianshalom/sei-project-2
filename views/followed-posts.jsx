var React = require("react");

class FollowedPosts extends React.Component {
    render() {
        let postContent = this.props.result.map((data) => {
            return data.experience;
        });
        return (
            <html>
                <head>
                    <title></title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body className="followed-posts">
                    <h3>{postContent}</h3>
                    <script src="/script.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = FollowedPosts;
