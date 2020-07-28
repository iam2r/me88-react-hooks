import React from "react";
import ReactDOM from "react-dom";
import Member from "./Member";
import Utils from "root/utils";


if(!Utils.force2Mobile()){
    require('root/style/member.scss');
    ReactDOM.render(
        <Member/>,
        document.querySelector("#root")
    );
}
