import React, { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const routes = [
  {
    path: "/transfer",
    key: "transfer",
    name: "TRANSFER",
    Component: () => <div>333</div>,
  },
];

export default function FundsCom(props: any) {
  const location = useLocation();
  const [state, setState] = useState({
    auto: false,
    refeshing: false,
    showMoneny: true,
  });

  const toggleAuto = (isAuto?: boolean) => {
    setState({ ...state, auto: isAuto ?? !state.auto });
  };

  const toggleShowMoneny = (show?: boolean) => {
    setState({ ...state, showMoneny: show ?? !state.showMoneny });
  };

  useEffect(() => {
    if (state.refeshing) {
      setState({ ...state, refeshing: false });
    }
  });

  return (
    <div className="funds-com">
      <div className="main-wallet-box">
        <div className="group">
          <span>Main Wallet</span>
          <i
            className={["icon-eyes",state.showMoneny ? "on" : ""].join(" ")}
            onClick={() => {
              toggleShowMoneny();
            }}
          ></i>
        </div>
        <div className="group">
          <span className="icon-box icon-box-chat">
            <img
              
              src={require("root/assets/images/mobile/live chat-2.png").default}
              alt=""
            />
          </span>
          <span className="icon-box icon-box-face">
            <img
              src={require("root/assets/images/mobile/personal.png").default}
              alt=""
            />
            <span className="message-count">1</span>
          </span>
        </div>
      </div>
      <div className="currency-box">
        <span className="currency">MYR</span>
        <span className="count">{state.showMoneny?"9,999,999.00":"******"}</span>
        <CSSTransition
          classNames="rotate360"
          in={state.refeshing}
          timeout={1000}
        >
          <span className="icon-box">
            <i
              className="icon-reload"
              onClick={() => {
                setState({ ...state, refeshing: true });
              }}
            ></i>
          </span>
        </CSSTransition>
      </div>
      <div className="bottom-box">
        <div className="restore-box">
          <i className="icon-restore"></i>
          <span>Restore Wallet</span>
        </div>
        <div className="group transfer-group">
          <span className="title">Auto Transfer</span>
          <i
            className={["icon-transfer", state.auto ? "on" : ""].join(" ")}
            onClick={() => {
              toggleAuto();
            }}
          ></i>
        </div>
      </div>
    </div>
  );
}
