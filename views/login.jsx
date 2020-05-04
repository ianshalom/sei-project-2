var React = require("react");

class Login extends React.Component {
    render() {
        console.log(this.props.types);
        return (
            <html>
                <head>
                    <title></title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body className="login-page">
                    <form
                        className="login-box"
                        action="/userLogin"
                        method="POST"
                    >
                        <h1>Login</h1>
                        <input type="text" name="name" placeholder="Username" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <input type="submit" value="Login" />
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = Login;
