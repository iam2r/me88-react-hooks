import React, { FC, useMemo, useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Turnover: FC = (props: any) => {
  const [state, setState] = useState({
    navList: [{ name: "Provider Balance" }, { name: "Weekly Turnover" }],
    active: 1,
    refeshing: false,
    turnoverList: [
      {
        title: "Sports",
        list: [
          {
            name: "BK8",
            value: "0.00",
          },
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

  useEffect(() => {
    if (state.refeshing) {
      setState({ ...state, refeshing: false });
    }
  });

  return (
    <div className="turnover-panel">
      <ul className="turnover-nav">
        {state.navList.map(({ name }, i) => (
          <li
            key={name}
            className={[i == state.active ? "on" : ""].join("")}
            onClick={() => {
              setState({ ...state, active: i });
            }}
          >
            <span>{name}</span>
          </li>
        ))}
      </ul>
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
  );
};

export default Turnover;
