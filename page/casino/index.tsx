import React from "react";
import ReactDOM from "react-dom";
import Casino from "./Casino";
import "root/style/casino.scss";
import Utils from "root/utils";



!Utils.force2Mobile()&&ReactDOM.render(
    <Casino/>,
    document.querySelector("#root")
);