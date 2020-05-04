var React = require("react");

class Signup extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title></title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body className="signup-page">
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
                </body>
            </html>
        );
    }
}

module.exports = Signup;
