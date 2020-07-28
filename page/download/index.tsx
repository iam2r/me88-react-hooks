import React from "react";
import ReactDOM from "react-dom";
import Download from "./Download";
import Utils from "root/utils";


if (!Utils.force2Mobile()) {
    require("root/style/download.scss");
    ReactDOM.render(
        <Download />,
        document.querySelector("#root")
    );
}
