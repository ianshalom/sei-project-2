var React = require("react");

class Experiences extends React.Component {
    render() {
        console.log(this.props.types);
        return (
            <html>
                <head>
                    <title></title>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body className="experiences-page">
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
                    <form
                        encType="multipart/form-data"
                        className="experiences-box"
                        action="/experiencesForm"
                        method="POST"
                    >
                        <h1>Make A Post!</h1>

                        <label htmlFor="country">Country you visited</label>
                        <input name="country" type="text" />

                        <label htmlFor="experience">
                            Detail the highlights of your trip
                        </label>
                        <textarea
                            name="description"
                            type="text"
                            rows="3"
                        ></textarea>

                        <label htmlFor="testimony">
                            What about traveling fascinates you?
                        </label>
                        <input name="testimony" type="text" />
                        <input
                            type="file"
                            name="myFile"
                            value="Choose File"
                            required
                        />
                        <input type="submit" value="Share" />
                    </form>
                </body>
            </html>
        );
    }
}

module.exports = Experiences;
