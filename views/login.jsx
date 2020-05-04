var React = require("react");

class Login extends React.Component {
    render() {
        console.log(this.props.types);
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
                <body className="login-page">
                    <div className="nav-container">
                        <ul className="navbar">
                            <li className="nav-item white">
                                <a href="/">Home</a>
                            </li>
                        </ul>
                    </div>
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
                    <span className="credits">
                        Photo by André Filipe on Unsplash
                    </span>
                </body>
            </html>
        );
    }
}

module.exports = Login;
