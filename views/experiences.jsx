var React = require("react");

class Experiences extends React.Component {
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
                <body className="experiences-page">
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

                    <span className="credits">
                        Photo by Thomas Tucker on Unsplash
                    </span>
                </body>
            </html>
        );
    }
}

module.exports = Experiences;
