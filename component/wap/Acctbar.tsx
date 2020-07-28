import React, { FC, useMemo, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useStore } from "root/page/wap/hooks";
const AcctBar: FC = (props: any) => {
  const history = useHistory();
  const { state: globaState, dispatch } = useStore();
  const [state, setState] = useState({
    navList: [
     
      {
        path: "/funds/deposit",
        key: "deposit",
        name: "DEPOSIT",
      },
      {
        path: "/funds/transfer",
        key: "transfer",
        name: "TRANSFER",
      },
      {
        path: "/funds/withdraw",
        key: "withdraw",
        name: "WITHDRAW",
      },
      {
        path: "/funds/history",
        key: "history",
        name: "HISTORY",
      },
    ],
  });
  return (
    <div className="acct-bar" style={{height:globaState.isLogined?'':'0px'}}>
      <div className="member-info">
        <div className="name-box">
          <div className="img-face">
            <img
              src={require("root/assets/images/mobile/personal.png").default}
              alt=""
            />
          </div>
          <span className="username">Kitseng</span>
        </div>

        <div className="level-box">
          <i className="icon-level"></i>
          <div>
            <span>Member Level</span>
            <span>EMERALD</span>
          </div>
        </div>
      </div>

      <ul>
        {state.navList.map(({ key, name, path }) => (
          <li
            key={key}
            className={history.location.pathname == path ? "on" : ""}
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

export default AcctBar;
