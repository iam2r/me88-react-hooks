import React, { useState, useEffect, useRef } from "react";
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import TransferSelect from "./TransferSelect";
import Turnover from "./Turnover";
export default function Transfer(props: any) {
  const location = useLocation();
  const [state, setState] = useState({
    special: false,
    promo: false,
    balance: false,
    turnover: false,
  });

  const currentSpecialRef = useRef();
  const currentPromoRef = useRef();

  const toggleBtn = (key: string, isShow?: boolean) => {
    setState((state) => {
      return { ...state, [key]: isShow ?? !(state as any)[key] };
    });
  };

  const clickListOut = (e: any) => {
    if (state.special) {
      let special = false;
      const stopEventEl: HTMLElement[] = [currentSpecialRef.current];
      for (let index = 0; index < stopEventEl.length; index++) {
        let child = stopEventEl[index];
        if (child && child.contains(e.target)) {
          special = true;
          break;
        }
      }

      setState((state) => ({ ...state, special }));
    }

    if (state.promo) {
      let promo = false;
      const stopEventEl: HTMLElement[] = [currentPromoRef.current];
      for (let index = 0; index < stopEventEl.length; index++) {
        let child = stopEventEl[index];
        if (child && child.contains(e.target)) {
          promo = true;
          break;
        }
      }

      setState((state) => ({ ...state, promo }));
    }
  };

  const initEvent = (off?: boolean) => {
    window[off ? "removeEventListener" : "addEventListener"](
      "click",
      clickListOut
    );
  };

  const destory = () => {
    initEvent(true);
  };

  useEffect(() => {
    initEvent();
    return destory;
  });

  return (
    <div>
      <div className="transfer-page">
        <Turnover />
        <div className="transfer-select-item">
          <div className="title-item">Transfer from</div>
          <div className="center-box">
            <TransferSelect />
          </div>
        </div>
        <div className="transfer-select-item transfer-btn-box">
          <div className="center-box">
            <i className="icon-transfer-btn"></i>
          </div>
        </div>

        <div className="transfer-select-item">
          <div className="title-item">Transfer to</div>
          <div className="center-box">
            <TransferSelect />
          </div>
        </div>
        <div className="transfer-select-item group-code">
          <div className="center-box">
            <div className="group">
              <span>Special Code</span>
            </div>
            <div
              ref={currentSpecialRef}
              className={["current-select",state.special?'on':''].join(" ")}
              onClick={() => {
                toggleBtn("special");
              }}
            >
              <span>Special Code</span>
              <div className="group">
                <span className="icon-box">
                  <CSSTransition
                    classNames="rotate180"
                    in={state.special}
                    timeout={300}
                  >
                    <i className="icon-arrow2"></i>
                  </CSSTransition>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="transfer-select-item group-code">
          <div className="center-box">
            <div className="group">
              <span>Promo Code*</span>
              <span>Promo Details</span>
            </div>
            <div
              ref={currentPromoRef}
              className={["current-select",state.promo?'on':''].join(" ")}
              onClick={() => {
                toggleBtn("promo");
              }}
            >
              <span>--- Please Select ---</span>
              <div className="group">
                <span className="icon-box">
                  <CSSTransition
                    classNames="rotate180"
                    in={state.promo}
                    timeout={300}
                  >
                    <i className="icon-arrow2"></i>
                  </CSSTransition>
                </span>
              </div>
            </div>
            <div className="input-box">
              <input type="text" defaultValue="0.00" disabled />
            </div>
          </div>
        </div>
        <div className="transfer-select-item group-amount">
          <div className="title-item">Transfer Amount</div>
          <div className="center-box">
            <div className="input-box">
              <input type="text" defaultValue="0.00" />
              <span className="btn-allin">ALL IN</span>
            </div>
            <div className="btns-tools">
              <span className="btn-reset">RESET</span>
              <span className="btn-submit">SUBMIT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
