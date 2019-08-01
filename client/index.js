import React from 'react';
import ReactDOM from 'react-dom';
import App from '../client/components/App';

const rootId = document.getElementById("root");

ReactDOM.render(<App />,rootId);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept("../client/components/App", () => {
        const NextApp = require("../client/components/App").default;
        ReactDOM.render(<App />, rootId);
    });
}