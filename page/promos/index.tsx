import React from "react";
import ReactDOM from "react-dom";
import Promos from "./Promos";
import Utils from "root/utils";


if(!Utils.force2Mobile()){
    require('root/style/promos.scss');
    ReactDOM.render(
        <Promos/>,
        document.querySelector("#root")
    );
}
