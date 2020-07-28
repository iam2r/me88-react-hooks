import React, { FC, useState, useEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Deposit from "./Deposit";
import Transfer from "./Transfer";
import WithDraw from "./WithDraw";
import History from "./History";
import Profile from "./Profile";
import ChangePwd from "./ChangePwd";
import Inbox from "./Inbox";
import Bank from "./Bank";

const MemberCom: FC = (props: any) => {
  const bankRoutes = [
    { path: "/deposit", key: "deposit", name: "Deposit", Component: Deposit },
    {
      path: "/transfer",
      key: "transfer",
      name: "Transfer",
      Component: Transfer,
    },
    {
      path: "/withdraw",
      key: "withdraw",
      name: "Withdraw",
      Component: WithDraw,
    },
    { path: "/history", key: "history", name: "History", Component: History },
  ];

  const userRoutes = [
    {
      path: "/profile",
      key: "profile",
      name: "My Profile",
      Component: Profile,
    },
    {
      path: "/changepwd",
      key: "changepwd",
      name: "Change Password",
      Component: ChangePwd,
    },
    { path: "/message", key: "message", name: "Inbox", Component: Inbox },
    { path: "/bank", key: "bank", name: "Banking Detail", Component: Bank },
  ];

  const [state, setState] = useState({ auto: false, refeshing: false });

  const toggleAuto = (isAuto?: boolean) => {
    setState({ ...state, auto: isAuto ?? !state.auto });
  };

  useEffect(() => {
    if (state.refeshing) {
      setState({ ...state, refeshing: false });
    }
  });

  return (
    <Router>
      <Route
        render={({ location }) => (
          <div className="member-com-page">
            <div className="member-nav">
              <div className="member-info">
                <div className="img-face">
                  <img
                    src={
                      require("root/assets/images/transfer/personal.png")
                        .default
                    }
                    alt=""
                  />
                </div>
                <span className="username">Kitseng</span>
                <div className="level-box">
                  <i className="icon-level"></i>
                  <div>
                    <span>Member Level</span>
                    <span>EMERALD</span>
                  </div>
                </div>
              </div>
              <div className="nav-item">
                <span>BANKING</span>
                <ul>
                  {bankRoutes.map((route) => (
                    <li
                      key={route.key}
                      className={location.pathname == route.path ? "on" : ""}
                    >
                      <Link to={route.path}>
                        <span>{route.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="nav-item">
                <span>USER PROFILE</span>
                <ul>
                  {userRoutes.map((route) => (
                    <li
                      key={route.key}
                      className={location.pathname == route.path ? "on" : ""}
                    >
                      <Link to={route.path}>
                        <span>{route.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="member-main">
              <div className="member-wallet">
                <div className="group">
                  <span className="title">Main Wallet</span>
                  <div className="reload">
                    <span>MYR</span>
                    <span className="count">9,999,999.00</span>
                    <CSSTransition
                      classNames="rotate360"
                      in={state.refeshing}
                      timeout={1000}
                    >
                      <i
                        className="icon-reload"
                        onClick={() => {
                          setState({ ...state, refeshing: true });
                        }}
                      ></i>
                    </CSSTransition>
                    <div className="restore-box">
                      <i className="icon-restore"></i>
                      <span>Restore Wallet</span>
                    </div>
                  </div>
                </div>
                <div className="group transfer-group">
                  <span className="title">Auto Transfer</span>
                  <i
                    className={["icon-transfer", state.auto ? "on" : ""].join(
                      " "
                    )}
                    onClick={() => {
                      toggleAuto();
                    }}
                  ></i>
                </div>
              </div>

              <TransitionGroup className="member-page">
                <CSSTransition
                  key={location.pathname}
                  timeout={300}
                  classNames="page"
                >
                  <Switch location={location}>
                    {[...bankRoutes, ...userRoutes].map(
                      ({ path, Component }) => (
                        <Route
                          key={path}
                          exact
                          path={path}
                          component={Component}
                        />
                      )
                    )}
                    <Route render={() => <Redirect to="/deposit" />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )}
      ></Route>
    </Router>
  );
};

export default MemberCom;
