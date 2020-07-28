import React, { FC, useMemo, useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { createPortal } from "react-dom";
const Turnover: FC = (props: any) => {
  const [state, setState] = useState({
    navList: [{ name: "Show Balance" }, { name: "Show Weekly Turnover" }],
    active: -1,
    refeshing: false,
    turnoverList: [
      {
        title: "Sports",
        list: [
          // {
          //   name: "BK8",
          //   value: "0.00",
          // },
          {
            name: "C-Sports",
            value: "0.00",
          },
          {
            name: "i-Sports",
            value: "0.00",
          },
          {
            name: "Virtual Sports",
            value: "0.00",
          },
        ],
      },
      {
        title: "Live Casino / Slots / Fishing",
        list: [
          {
            name: "918Kiss",
            value: "0.00",
          },
          {
            name: "Allbet",
            value: "0.00",
          },
          {
            name: "Asia Gaming",
            value: "0.00",
          },
          {
            name: "Dream Gaming",
            value: "0.00",
          },
          {
            name: "Ebet",
            value: "0.00",
          },
          {
            name: "Evolution Gaming",
            value: "0.00",
          },
          {
            name: "GamePlay",
            value: "0.00",
          },
          {
            name: "GG Gaming",
            value: "0.00",
          },
          {
            name: "Gold Deluxe",
            value: "0.00",
          },
          {
            name: "Mega888",
            value: "0.00",
          },
          {
            name: "Mircogaming",
            value: "0.00",
          },
          {
            name: "Play'n Go",
            value: "0.00",
          },
          {
            name: "Playtech",
            value: "0.00",
          },
          {
            name: "Pragmatic Play",
            value: "0.00",
          },
          {
            name: "SA Gaming",
            value: "0.00",
          },
          {
            name: "Sexy Baccarat",
            value: "0.00",
          },
          {
            name: "Spadegaming",
            value: "0.00",
          },
        ],
      },
      {
        title: "Others",
        list: [
          {
            name: "IDN Poker",
            value: "0.00",
          },
          {
            name: "QQ Keno",
            value: "0.00",
          },
        ],
      },
    ],
  });

  const currentTop = useMemo(() => {
    switch (state.active) {
      case -1:
        return (
          <ul className="turnover-nav">
            {state.navList.map(({ name }, i) => (
              <li
                key={name}
                className={[i == state.active ? "on" : ""].join("")}
                onClick={() => {
                  setState((state) => ({ ...state, active: i }));
                }}
              >
                {<span>{name}</span>}
                <i className="icon-arrow-transfer"></i>
              </li>
            ))}
          </ul>
        );
      case 0:
        return (
          <ul
            className="balance-item"
            onClick={() => {
              setState((state) => ({ ...state, active: -1 }));
            }}
          >
            <li style={{width:'100%'}}>
              <span>Hide Balance</span>
              <i className="icon-close-transfer"></i>
            </li>
          </ul>
        );
      case 1:
        return (
          <ul
            className="turnover-item"
            onClick={() => {
              setState((state) => ({ ...state, active: -1 }));
            }}
          >
            <li style={{width:'100%'}}>
              <span>Hide Weekly Turnover</span>
              <i className="icon-close-transfer"></i>
            </li>
          </ul>
        );

      default:
        break;
    }
  }, [state.active]);

  const fixeContainerRef = useRef();

  useEffect(() => {
    if (state.refeshing) {
      setState({ ...state, refeshing: false });
    }

    fixeContainerRef.current = document.querySelector(".tool-bar.funds");
  });

  return (
    <div className="turnover-panel">
      {fixeContainerRef.current &&
        createPortal(
          <TransitionGroup className="turnover-top-box">
            <CSSTransition
              key={state.active}
              timeout={500}
              classNames="fade-next"
            >
              {currentTop}
            </CSSTransition>
          </TransitionGroup>,
          fixeContainerRef.current
        )}
      <div className="show-item-box">
        <CSSTransition
          classNames="spread-bottom"
          in={state.active == 0}
          timeout={300}
          unmountOnExit
        >
          <div className="balance-show-box">
            <div className="turnover-content">
              {state.turnoverList.map(({ title, list }, i) => (
                <div key={title}>
                  <div className="title">
                    <span>{title}</span>
                  </div>
                  <ul>
                    {list.map(({ name, value }) => (
                      <li key={name}>
                        <span>{name}</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          classNames="spread-bottom"
          in={state.active == 1}
          timeout={300}
          unmountOnExit
        >
          <div className="turnover-show-box">
            <div className="total-box">
              <span>Total</span>
              <div>
                <span>9,999,999.00</span>
                <span className="icon-box">
                  <CSSTransition
                    classNames="rotate360"
                    in={state.refeshing}
                    timeout={1000}
                  >
                    <i
                      className="icon-reload"
                      onClick={() => {
                        setState({ ...state, refeshing: true });
                      }}
                    ></i>
                  </CSSTransition>
                </span>
              </div>
            </div>
            <div className="turnover-content">
              {state.turnoverList.map(({ title, list }, i) => (
                <div key={title}>
                  <div className="title">
                    <span>{title}</span>
                  </div>
                  <ul>
                    {list.map(({ name, value }) => (
                      <li key={name}>
                        <span>{name}</span>
                        <span>{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Turnover;
