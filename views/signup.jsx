var React = require("react");

class Signup extends React.Component {
    render() {
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
                <body className="signup-page">
                    <div className="nav-container">
                        <ul className="navbar">
                            <li className="nav-item white">
                                <a href="/">Home</a>
                            </li>
                        </ul>
                    </div>
                    <form
                        encType="multipart/form-data"
                        className="signup-box"
                        action="/signupUser"
                        method="POST"
                    >
                        <h1>Sign Up</h1>
                        <p>This will be the username you will use to login.</p>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <input type="file" name="myFile" required />
                        <input type="submit" value="Sign Up" />
                    </form>
                    <span className="credits">
                        Photo by Anthony DELANOIX on Unsplash
                    </span>
                </body>
            </html>
        );
    }
}

module.exports = Signup;
