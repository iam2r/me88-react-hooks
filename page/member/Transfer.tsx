import React, { FC, useMemo, useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import TransferSelect from "./transfer/TransferSelect";
import Turnover from "./transfer/Turnover";
const Transfer: FC = (props: any) => {
  const [state, setState] = useState({ from: false, to: false });
  const toggleFrom = (isShow?: boolean) => {
    setState({ ...state, from: isShow ?? !state.from });
  };
  const toggleTo = (isShow?: boolean) => {
    setState({ ...state, to: isShow ?? !state.to });
  };

  const inputFromRef = useRef();
  const inputToRef = useRef();
  const FromSelectRef = useRef();
  const ToSelectRef = useRef();

  const clickListOut = (e: any) => {
    let from = false,
      to = false;
    if (state.from) {
      const stopEventEl: HTMLElement[] = [
        inputFromRef.current,
        FromSelectRef.current,
      ];
      for (let index = 0; index < stopEventEl.length; index++) {
        let child = stopEventEl[index];
        if (child && child.contains(e.target)) {
          from = state.from;
          break;
        }
      }
    }

    if (state.to) {
      const stopEventEl: HTMLElement[] = [
        inputToRef.current,
        ToSelectRef.current,
      ];
      for (let index = 0; index < stopEventEl.length; index++) {
        let child = stopEventEl[index];
        if (child && child.contains(e.target)) {
          to = state.to;
          break;
        }
      }
    }

    setState({ ...state, from, to });
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
    <div className="transfer-page">
      <div className="form-box">
        <div className="item-group group-absolute">
          <i className="icon-transfer-btn"></i>
        </div>
        <div className="item-group group-transfer">
          <div className="title">Transfer from</div>
          <div className="group">
            <div
              ref={inputFromRef}
              className="input-box input-box-from"
              onClick={() => {
                toggleFrom();
              }}
            >
              <input type="text" readOnly={true} defaultValue="Main Wallet" />
              <span className="icon-box">
                <CSSTransition
                  classNames="rotate180"
                  in={state.from}
                  timeout={300}
                >
                  <i className="icon-arrow2"></i>
                </CSSTransition>
              </span>
            </div>
            <div className="input-box">
              <input type="text" disabled value="0.00" />
            </div>
            <CSSTransition
              classNames="spread-bottom"
              in={state.from}
              timeout={300}
              unmountOnExit
            >
              <div
                ref={FromSelectRef}
                className="transfer-select-box"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <TransferSelect onClose={()=>{toggleFrom(false);}}/>
              </div>
            </CSSTransition>
          </div>
        </div>
        <div className="item-group group-transfer">
          <div className="title">Transfer to</div>
          <div className="group">
            <div
              ref={inputToRef}
              className="input-box input-box-to"
              onClick={() => {
                toggleTo();
              }}
            >
              <input type="text" readOnly={true} defaultValue="Main Wallet" />
              <span className="icon-box">
                <CSSTransition
                  classNames="rotate180"
                  in={state.to}
                  timeout={300}
                >
                  <i className="icon-arrow2"></i>
                </CSSTransition>
              </span>
            </div>
            <div className="input-box">
              <input type="text" disabled value="0.00" />
            </div>
            <CSSTransition
              classNames="spread-bottom"
              in={state.to}
              timeout={300}
              unmountOnExit
            >
              <div
                ref={ToSelectRef}
                className="transfer-select-box"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <TransferSelect onClose={()=>{toggleTo(false);}}/>
              </div>
            </CSSTransition>
          </div>
        </div>
        <div className="item-group group-code">
          <div className="title">Special Code</div>
          <div className="group">
            <div className="input-box">
              <input type="text" placeholder={"Special Code"} />
            </div>
            <span>Promo Details</span>
          </div>
        </div>
        <div className="item-group group-code">
          <div className="title">Promo Code *</div>
          <div className="group">
            <div className="input-box">
              <select name="" id="">
                <option value="">--- Please Select ---</option>
              </select>
            </div>
            <div className="input-box">
              <input type="text" disabled value="0.00" />
            </div>
          </div>
        </div>
        <div className="item-group group-amount">
          <div className="title">Transfer Amount</div>
          <div className="group">
            <div className="input-box">
              <input type="text" />
              <span className="btn-all-in">ALL IN</span>
            </div>
          </div>
        </div>
        <div className="item-group group-btn">
          <span className="btn btn-submit">SUBMIT</span>
          <span className="btn btn-reset">RESET</span>
        </div>
      </div>
      <Turnover/>
    </div>
  );
};

export default Transfer;
