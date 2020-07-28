import React, { FC, useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useStore } from "root/page/wap/hooks";
const Toolbar: FC = (props: any) => {
  const { state: globaState, dispatch } = useStore();
  const history = useHistory();
  const [state, setState] = useState({
    refeshing: false,
  });
  const doLogin = () => {
    dispatch({ isLogined: true });
  };

  useEffect(() => {
    //
    if (state.refeshing) {
      setState({ ...state, refeshing: false });
    }
  });

  return (
    <div className="tool-bar">
      <div className="icon-box">
        <i
          className="icon-logo"
          onClick={() => {
            if (history.location.pathname == "/home") return;
            history.push("/home");
          }}
        ></i>
      </div>
      <div className="content">
        {globaState.isLogined ? (
          <div className="restore-box">
            <div className="currency-count">
              <span className="currency">MYR</span>
              <span className="count">8,888,888.00</span>
            </div>

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
            <span className="icon-box">
              <i className="icon-restore"></i>
            </span>
          </div>
        ) : (
          <div className="login-btn">
            <span
              className="btn-login"
              onClick={() => {
                doLogin();
              }}
            >
              LOGIN
            </span>
            <span
              className="btn-sign-up"
              onClick={() => {
                dispatch({ view: { register: true } });
              }}
            >
              SIGN UP
            </span>
          </div>
        )}
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
  );
};

export default Toolbar;
