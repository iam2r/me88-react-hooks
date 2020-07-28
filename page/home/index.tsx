import Utils from "root/utils";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
if (!Utils.force2Mobile()) {
    require('root/style/home.scss');
    ReactDOM.render(
        <Home />,
        document.querySelector("#root")
    );
}
