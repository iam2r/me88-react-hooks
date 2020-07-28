import React from "react";
import ReactDOM from "react-dom";
import Register from "./Register";
import Utils from "root/utils";

if (!Utils.force2Mobile()) {
    require('root/style/register.scss');
    ReactDOM.render(
        <Register />,
        document.querySelector("#root")
    );
}
