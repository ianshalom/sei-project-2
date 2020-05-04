var React = require("react");

class Home extends React.Component {
    render() {
        let name = this.props.name;
        let testimonies = this.props.testimonyResult || [];
        let displayNavbar;
        let posts = this.props.result || [];
        let currentUserId = parseInt(this.props.id) || "";
        let profileLink = "/profile/" + currentUserId || "";

        //--------------- Display Testimonies ----------------------------------
        let displayTestimonies = testimonies.map((test) => {
            return (
                <div className="testimony-box">
                    <h3 className="testimony-content">{test.testimony}</h3>
                    <p className="testimony-name">{test.name}</p>
                </div>
            );
        });
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
                                <a className="name-of-user" href={link}>
                                    {post.name}
                                </a>
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
                <body>
                    <div className="home-container">
                        <div className="header">Vicarious Adventures</div>
                        <hr></hr>
                        {displayNavbar}

                        <div className="background-image-container">
                            <h1 className="greet-user">Welcome {name}!</h1>
                            <h3 className="slogan">Discover through others</h3>
                            <span className="credits">
                                Photo by Arnaud STECKLE on Unsplash
                            </span>
                        </div>

                        <div className="bottom-container">
                            <div id="posts" className="posts">
                                <h1 className="post-title">Posts</h1> <hr></hr>
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
