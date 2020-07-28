import React, { FC, useMemo, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
const Navbar: FC = (props: any) => {
  const history = useHistory();

  const [state, setState] = useState({
    navList: [
      { path: "/home", key: "home", name: "HOME" },
      { path: "/funds/transfer", key: "funds", name: "FUNDS" },
      { path: "/promos", key: "promos", name: "PROMOS" },
      { path: "/livechat", key: "livechat", name: "LIVE CHAT" },
      { path: "/account", key: "account", name: "MY ACCOUNT" },
    ],
  });
  return (
    <div className="nav-bar">
      <ul>
        {state.navList.map(({ key, name, path }) => (
          <li
            key={key}
            className={["icon-hover-box",history.location.pathname == path ? "on" : ""].join(" ")}
            onClick={() => {
              history.location.pathname != path && history.push(path);
            }}
          >
            <span className="icon-box">
              <i className={"icon-wap-" + key}></i>
            </span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
