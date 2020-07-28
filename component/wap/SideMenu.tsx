import React, { FC, useMemo, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useStore } from "root/page/wap/hooks";
export interface SubMenuProps {
  onClose?: () => void;
}
const SubMenu: FC<SubMenuProps> = (props: SubMenuProps) => {
  const history = useHistory();
  const { state: globaState, dispatch } = useStore();
  const [state, setState] = useState({
    navList: [
      { path: "/language", key: "language", name: "LANGUAGE" },
      { path: "/home", key: "home", name: "HOME" },
      { path: "", key: "login", name: "LOGIN" },
      { path: "/sports", key: "sports", name: "SPORTS" },
      { path: "/esports", key: "esports", name: "ESPORTS" },
      { path: "/casino", key: "casino", name: "LIVE CASINO" },
      { path: "/slots", key: "slots", name: "SLOTS" },
      { path: "/poker", key: "poker", name: "POKER" },
      { path: "/fishing", key: "fishing", name: "FISHING" },
      { path: "/promos", key: "promos", name: "PROMOS" },
      { path: "/vip", key: "vip", name: "VIP" },
      { path: "/download", key: "download", name: "DOWNLOAD" },
      { path: "/contact", key: "contact", name: "CONTACT US" },
      { path: "/live-chat", key: "live-chat", name: "LIVE CHAT" },
      // { path: "", key: "desktop", name: "DESKTOP" },
    ],
  });
  const doClick = (key: string, path: string) => {
    switch (key) {
      case "login":
        dispatch({ isLogined: !globaState.isLogined });
        break;
      case "desktop":
        window.location.href = "./index.html";
        break;
      default:
        if (["home", "casino", "slots", "promos", "download"].includes(key)) {
          history.location.pathname != path && history.push(path);
        }

        break;
    }
    doClose();
  };
  const doClose = () => {
    props.onClose && props.onClose();
    dispatch({ view: { sidemenu: false } });
  };
  return (
    <div
      className="side-menu-box"
      onClick={() => {
        doClose();
      }}
    >
      <div
        className="side-menu"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="menu-btns">
          <i
            className="icon-back"
            onClick={() => {
              doClick("home", "/home");
            }}
          ></i>
          <span className="icon-box">
            <i
              className="icon-menu2"
              onClick={() => {
                doClose();
              }}
            ></i>
          </span>
        </div>
        <div className="side-menu-scroll-wrapper">
          <ul>
            {state.navList.map(({ key, name, path }) => (
              <li
                key={key}
                className={history.location.pathname == path ? "on" : ""}
                onClick={() => {
                  doClick(key, path);
                }}
              >
                <span>
                  {key == "login"
                    ? globaState.isLogined
                      ? "LOGOUT"
                      : "LOGIN"
                    : name}
                </span>
                <span className="icon-box">
                  <i
                    className={[
                      "icon-wap-side-" + key,
                      key == "language" ? globaState.lan : "",
                    ].join(" ")}
                  ></i>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SubMenu;
