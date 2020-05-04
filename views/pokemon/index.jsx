var React = require("react");

class Home extends React.Component {
    render() {
        console.log(this.props.types);
        return (
            <html>
                <head>
                    <title></title>
                    <link rel="stylesheet" href="/.style.css" />
                </head>
                <body>
                    <h3>Hello</h3>
                    <script src="/script.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = Home;
