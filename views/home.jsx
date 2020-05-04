var React = require("react");

class Home extends React.Component {
    render() {
        let name = this.props.name;
        let testimonies = this.props.testimonyResult || [];
        console.log(testimonies);
        let displayNavbar;
        let posts = this.props.result || [];
        let currentUserId = parseInt(this.props.id) || "";
        let profileLink = "/profile/" + currentUserId || "";

        //--------------- Display Post Container ----------------------------------
        let post = posts.map((post) => {
            let link = "/profile/" + post.user_id;
            return (
                <div className="post-container">
                    <div className="description-text">
                        <h3 className="country">{post.country}</h3>
                        <p className="description">{post.experience}</p>
                        <div className="mini-data">
                            <img
                                className="profile-img-sm"
                                src={post.profile_img}
                            />
                            <p className="mini-name">
                                <a href={link}>{post.name}</a>
                            </p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={post.img} />
                    </div>
                </div>
            );
        });

        //--------------- Navbar Dynamic Displays depending on User login status ----------------------------------
        if (name != null) {
            displayNavbar = (
                <div className="nav-container">
                    <ul className="navbar">
                        <li className="nav-item">
                            <a href="/experiencesform">Post Something</a>
                        </li>
                        <li className="nav-item">
                            <a href="#posts">Posts</a>
                        </li>
                        <li className="nav-item">
                            <a href={profileLink}>My Profile</a>
                        </li>
                        <li className="nav-item">
                            <form
                                method="POST"
                                action="/logout/?_method=delete"
                            >
                                <input
                                    type="submit"
                                    className="logout-button"
                                    value="Logout"
                                />
                            </form>
                        </li>
                    </ul>
                </div>
            );
        } else {
            displayNavbar = (
                <div className="nav-container">
                    <ul className="navbar">
                        <li className="nav-item">
                            <a href="/signup">Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a href="#">Posts</a>
                        </li>
                    </ul>
                </div>
            );
        }

        //--------------- Display Testimonies ----------------------------------
        let displayTestimonies = testimonies.map((test) => {
            return (
                <div>
                    <h3 className="testimony-content">{test.testimony}</h3>
                    <p className="testimony-name">{test.name}</p>
                </div>
            );
        });

        return (
            <html>
                <head>
                    <title></title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body>
                    <div className="home-container">
                        <div className="header">Vicarious Adventures</div>
                        <hr></hr>
                        {displayNavbar}

                        <div className="background-image-container">
                            <h1 className="greet-user">WELCOME {name}!</h1>
                        </div>

                        <div className="bottom-container">
                            <div id="posts" className="posts">
                                <h1>Posts</h1> <hr></hr>
                                {post}
                            </div>
                            <div className="testimonies">
                                {displayTestimonies}
                            </div>
                        </div>
                    </div>
                    <script src="/script.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = Home;
