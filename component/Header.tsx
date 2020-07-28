import React, { FC, useState, useEffect, useRef, useMemo } from "react";
import { CSSTransition } from "react-transition-group";
import Login from "./Login";
import Clock from "./Clock";
const Header: FC = (props: any) => {
  const navList = [
    { key: "home", name: "HOME", path: "index.html" },
    { key: "sports", name: "SPORTS", path: "#sports.html" },
    { key: "esports", name: "ESPORTS", path: "#esports.html" },
    { key: "live_casino", name: "LIVE CASINO", path: "casino.html" },
    { key: "slots", name: "SLOTS", path: "slots.html" },
    { key: "poker", name: "POKER", path: "#poker.html" },
    { key: "fishing", name: "FISHING", path: "#fishing.html" },
    { key: "promos", name: "PROMOS", path: "promos.html" },
    { key: "vip", name: "VIP", path: "#vip.html" },
  ];
  const downList = [
    {
      key: "download",
      name: "Download",
      handler: () => {
        window.location.href = "./download.html";
      },
    },
    {
      key: "mobile",
      name: "Mobile",
      handler: () => {
        window.location.href = "./wap";
      },
    },
    {
      key: "live_chat",
      name: "Live Chat",
      handler: () => {
        // window.location.href = "./download.html"
      },
    },
  ];
  const dropList = [
    {
      key: "messages",
      name: "Messages",
    },
    {
      key: "deposit",
      name: "Deposit",
    },
    {
      key: "withdrawal",
      name: "Withdrawal",
    },
    {
      key: "transfer",
      name: "Transfer",
    },
    {
      key: "history",
      name: "History",
    },
  ];

  const accountInfoRef = useRef();
  const dropListRef = useRef();
  const [state, setState] = useState({
    page: "",
    time: "GMT+8 06/01/2020 18:18:28",
    isLogin: false,
    showDrop: false,
    refeshing: false,
    showLogin: false,
  });

  const toggleDropList = (isShow?: boolean) => {
    setState({ ...state, showDrop: isShow ?? !state.showDrop });
  };

  const clickDropListOut = (e: any) => {
    if (state.showDrop) {
      const stopEventEl: HTMLElement[] = [
        accountInfoRef.current,
        dropListRef.current,
      ];
      for (let index = 0; index < stopEventEl.length; index++) {
        let child = stopEventEl[index];
        if (child && child.contains(e.target)) return;
      }
      toggleDropList(false);
    }
  };

  const dropToPage = (i: number) => {
    switch (i) {
      case 0:
        window.location.href = "./member.html#/message";
        break;
      case 1:
        window.location.href = "./member.html#/deposit";
        break;
      case 2:
        window.location.href = "./member.html#/withdraw";
        break;
      case 3:
        window.location.href = "./member.html#/transfer";
        break;
      case 4:
        window.location.href = "./member.html#/history";
        break;

      default:
        break;
    }
    toggleDropList(false);
  };

  const initEvent = (off?: boolean) => {
    window[off ? "removeEventListener" : "addEventListener"](
      "click",
      clickDropListOut
    );
  };

  const destory = () => {
    initEvent(true);
  };

  useEffect(() => {
    const page = navList.find((it) =>
      it.path.includes(
        window.location.pathname.split("/").pop().replace(".html", "")
      )
    )?.key;
    setState({ ...state, page });
  }, []); //依赖为空 ，只执行一次

  useEffect(() => {
    initEvent();

    //
    if (state.refeshing) {
      setState({ ...state, refeshing: false });
    }
    return destory;
  });

  return (
    <div id="header">
      <div className="top-header">
        <div className="container">
          <div className="top-header-box">
            <i
              data-page={state.page}
              className="icon-logo"
              onClick={() => {
                window.location.href = navList[0].path;
              }}
            ></i>
            <ul className="nav-list">
              {navList.map(({ key, name, path }) => (
                <li
                  key={key}
                  data-page={key}
                  className={[key == state.page ? "on" : ""].join(" ")}
                  onClick={() => {
                    !path.includes("#") && (window.location.href = path);
                    setState({ ...state, page: key });
                  }}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="second-header">
        <div className="container">
          <div className="second-header-box">
            <Clock />
            <div
              className={["right", state.isLogin ? "logined" : ""].join(" ")}
            >
              <ul className="down-list">
                {downList.map(({ key, name, handler }) => (
                  <li key={key} onClick={handler}>
                    {name}
                  </li>
                ))}
              </ul>
              {!state.isLogin ? (
                <div className="before-login">
                  <div className="btn-box">
                    <span
                      className="btn btn-login"
                      onClick={() => {
                        setState({ ...state, showLogin: true });
                      }}
                    >
                      LOGIN
                    </span>
                    <span
                      className="btn btn-sign-up"
                      onClick={() => {
                        window.location.href = "./register.html";
                      }}
                    >
                      SIGN UP
                    </span>
                  </div>
                </div>
              ) : (
                <div className="after-login">
                  <div className="accout-info-box">
                    <div
                      className="currency"
                      onClick={() => {
                        setState({ ...state, refeshing: true });
                      }}
                    >
                      <span>MYR 8,888,888.88</span>
                      <span className="reload-box">
                        <CSSTransition
                          classNames="rotate360"
                          in={state.refeshing}
                          timeout={1000}
                        >
                          <i className="icon-refesh"></i>
                        </CSSTransition>
                      </span>
                    </div>
                    <div
                      ref={accountInfoRef}
                      className="account-info"
                      onClick={() => {
                        toggleDropList();
                      }}
                    >
                      <span>Lalabc8888</span>
                      <div className="face">
                        <img
                          src={require("../assets/images/personal.png").default}
                          alt=""
                        />
                        <span className="count">1</span>
                      </div>
                      <CSSTransition
                        classNames="rotate180"
                        in={state.showDrop}
                        timeout={300}
                      >
                        <i className="icon-arrow"></i>
                      </CSSTransition>
                      <CSSTransition
                        classNames="spread-bottom"
                        in={state.showDrop}
                        timeout={300}
                        unmountOnExit
                      >
                        <ul
                          className="drop-list"
                          ref={dropListRef}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          {dropList.map(({ key, name }, i) => (
                            <li
                              key={key}
                              onClick={() => {
                                dropToPage(i);
                              }}
                            >
                              <span>{name}</span>
                              <span>{i == 0 && `(1)`}</span>
                            </li>
                          ))}
                        </ul>
                      </CSSTransition>
                    </div>
                  </div>
                  <div className="btn-box">
                    <span className="btn btn-deposit">DEPOSIT</span>
                    <span
                      className="btn btn-logout"
                      onClick={() => {
                        setState({ ...state, isLogin: false });
                      }}
                    >
                      LOGOUT
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <CSSTransition
        classNames="alert"
        unmountOnExit
        timeout={300}
        in={state.showLogin}
      >
        <Login
          onClose={() => {
            setState({ ...state, showLogin: false });
          }}
          doLogin={() => {
            setState({ ...state, showLogin: false, isLogin: true });
          }}
        />
      </CSSTransition>
    </div>
  );
};

export default Header;
