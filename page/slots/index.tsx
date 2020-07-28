import React from "react";
import ReactDOM from "react-dom";
import Slots from "./Slots";
import Utils from "root/utils";
if(!Utils.force2Mobile()){
    require("root/style/slots.scss");
    ReactDOM.render(
        <Slots/>,
        document.querySelector("#root")
    );
}

