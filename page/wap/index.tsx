import "./public-path";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Toolbar from "root/component/wap/Toolbar";
import ToolbarFunds from "root/component/wap/ToolbarFunds";
import Navbar from "root/component/wap/Navbar";
import SideMenu from "root/component/wap/SideMenu";
import Home from "./home/index";
import DownLoad from "./download";
import Promos from "./promos";
import Casino from "./casino";
import Slots from "./slots";
import Register from "./Register";
import Transfer from "./funds/transfer";
import { useCreateStore, Provider } from "./hooks";
import "root/style/index.scss";
import "root/style/wap.scss";
import Utils from "root/utils";

const routes = [
  { path: "/home", key: "home", name: "HOME", Component: Home },
  { path: "/promos", key: "promos", name: "PROMOS", Component: Promos },
  { path: "/livechat", key: "livechat", name: "LIVE CHAT", Component: Home },
  { path: "/account", key: "account", name: "MY ACCOUNT", Component: Home },
  { path: "/sports", key: "sports", name: "SPORTS", Component: Home },
  { path: "/esports", key: "esports", name: "ESPORTS", Component: Home },
  { path: "/casino", key: "casino", name: "LIVE CASINO", Component: Casino },
  { path: "/slots", key: "slots", name: "SLOTS", Component: Slots },
  { path: "/poker", key: "poker", name: "POKER", Component: Home },
  { path: "/fishing", key: "fishing", name: "FISHING", Component: Home },
  { path: "/download", key: "download", name: "DownLoad", Component: DownLoad },
  {
    path: "/funds/transfer",
    key: "transfer",
    name: "TRANSFER",
    Component: Transfer,
  },
  {
    path: "/funds/deposit",
    key: "deposit",
    name: "DEPOSIT",
    Component: Transfer,
  },
  {
    path: "/funds/withdraw",
    key: "withdraw",
    name: "WITHDRAW",
    Component: Transfer,
  },
  {
    path: "/funds/history",
    key: "history",
    name: "HISTORY",
    Component: Transfer,
  },
];


Utils.removeHoverSideEffect();

const App = () => {
  const store = useCreateStore();
  return (
    <Provider value={store}>
      <Router>
        <Route
          render={({ location }) => (
            <div
              data-logined={store.state.isLogined}
              data-page={location.pathname}
            >
              <CSSTransition
                classNames="fade-next"
                in={location.pathname.split("/")[1] != "funds"}
                timeout={500}
                unmountOnExit
              >
                <Toolbar />
              </CSSTransition>
              <CSSTransition
                classNames="fade-next"
                in={location.pathname.split("/")[1] == "funds"}
                timeout={500}
                unmountOnExit
              >
                <ToolbarFunds />
              </CSSTransition>

              <TransitionGroup className="wap-page">
                <CSSTransition
                  key={location.pathname}
                  timeout={500}
                  classNames="slider-fade-next"
                  onEnter={() => {
                    window.scrollTo(0, 0);
                  }}
                >
                  <Switch location={location}>
                    {routes.map(({ path, Component }) => (
                      <Route
                        key={path}
                        exact
                        path={path}
                        component={Component}
                      />
                    ))}
                    <Route render={() => <Redirect to="/home" />} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
              <CSSTransition
                classNames="slider-y-bottom-in"
                in={store.state.isLogined}
                timeout={500}
                unmountOnExit
              >
                <Navbar />
              </CSSTransition>
              <CSSTransition
                classNames="slider-y-bottom-in"
                in={store.state.view.register}
                timeout={500}
                unmountOnExit
              >
                <Register />
              </CSSTransition>

              <CSSTransition
                classNames="side-menu"
                in={store.state.view.sidemenu}
                timeout={300}
                unmountOnExit
              >
                <SideMenu />
              </CSSTransition>
            </div>
          )}
        />
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
