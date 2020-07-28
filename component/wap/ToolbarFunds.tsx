import React, { FC, useState, useEffect, useMemo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useStore } from "root/page/wap/hooks";
import FundsCom from "root/page/wap/funds/FundsCom";
const ToolbarFunds: FC = (props: any) => {
  const { state: globaState, dispatch } = useStore();
  const history = useHistory();
  const [state, setState] = useState({
    refeshing: false,
  });

  const title = useMemo(() => {
    const str = history.location.pathname.split("/")[2];
    return str ? str.toUpperCase() : "";
  }, [history.location.pathname]);

  return (
    <div className="tool-bar funds">
      <div className="title-box">
        <div className="left">
          <div className="icon-box">
            <i
              className="icon-back"
              onClick={() => {
                history.goBack();
              }}
            ></i>
          </div>
          <span>{title}</span>
        </div>

        <div className="icon-box">
          <i
            className="icon-menu"
            onClick={() => {
              dispatch({ view: { sidemenu: true } });
            }}
          ></i>
        </div>
      </div>
      <FundsCom />
    </div>
  );
};

export default ToolbarFunds;
