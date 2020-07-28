import React, { FC, useMemo, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useStore } from "root/page/wap/hooks";

const SubMenu: FC = (props: any) => {
  const history = useHistory();
  const { state: globaState, dispatch } = useStore();
  const [state, setState] = useState({
    navList: [
      { path: "/home", key: "home", name: "HOME" },
      { path: "/sports", key: "sports", name: "SPORTS" },
      { path: "/esports", key: "esports", name: "ESPORTS" },
      { path: "/casino", key: "casino", name: "LIVE CASINO" },
      { path: "/slots", key: "slots", name: "SLOTS" },
      { path: "/poker", key: "poker", name: "POKER" },
      { path: "/fishing", key: "fishing", name: "FISHING" },
    ],
  });
  const doClick = (key: string, path: string) => {
    if (["home", "casino", "slots", "promos", "download"].includes(key)){
      history.location.pathname != path && history.push(path);
    }
  
  };

  return (
    <div className="submenu-box">
      <ul>
        {state.navList.map(({ key, name, path }, i) => (
          <li
            key={key}
            className={history.location.pathname == path ? "on" : ""}
            onClick={() => {
              doClick(key, path);
            }}
          >
            {i == 3 ? (
              <span>
                LIVE
                <br />
                CASINO
              </span>
            ) : (
              <span>{name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubMenu;
