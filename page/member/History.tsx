import React, { FC, useMemo, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const History: FC = (props: any) => {
  const [state, setState] = useState({
    type: {
      active: 0,
      list: [
        "Transfer",
        "Withdraw/Deposit",
        "Promotion Apply",
        "Rebate/Cashback",
        "Rewards",
      ],
    },
    date: {
      active: 0,
      list: ["Today", "In 3 days", "In a week", "In a month"],
    },
    list: [],
  });
  return (
    <div className="history-page">
      <div className="history-tools">
        <div className="group-item transaction-type">
          <div className="title">
            <span>Transaction Type</span>
            <span>*</span>
          </div>
          <div className="group">
            <ul>
              {state.type.list.map((item, i) => (
                <li
                  key={item}
                  className={[i == state.type.active ? "on" : ""].join(" ")}
                  onClick={() => {
                    setState({ ...state, type: { ...state.type, active: i } });
                  }}
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="group-item transaction-date">
          <div className="title">
            <span>Transaction Date</span>
            <span>*</span>
          </div>
          <div className="group">
            <ul>
              {state.date.list.map((item, i) => (
                <li
                  key={item}
                  className={[i == state.date.active ? "on" : ""].join(" ")}
                  onClick={() => {
                    setState({ ...state, date: { ...state.date, active: i } });
                  }}
                >
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="group-item date-select">
          <div className="title">Start Date</div>
          <div className="group">
            <div className="input-box">
              <input type="text" placeholder="2020-03-30"/>
              <i className="icon-date"></i>
            </div>
            <span>to</span>
            <div className="input-box">
              <input type="text" placeholder="2020-03-30"/>
              <i className="icon-date"></i>
            </div>
            <span className="btn-submit">SUBMIT</span>
          </div>
        </div>
      </div>
      <div className="history-list">
        <div className="table-header">
          <ul>
            <li>Transaction Date</li>
            <li>Amount</li>
            <li>From</li>
            <li>To</li>
            <li>Promo Name</li>
            <li>Status</li>
          </ul>
        </div>
        {state.list.length ? (
          <TransitionGroup className="table-list">
            {state.list.map(({ date, amount, from, to, promo, status }, i) => (
              <CSSTransition
                key={i}
                timeout={500}
                classNames="fade-next"
              >
                <ul
                  key={i}
                >
                  <li>
                    <span>{date}</span>
                  </li>
                  <li>
                    <span>{amount}</span>
                  </li>
                  <li>
                    <span>{from}</span>
                  </li>
                  <li>
                    <span>{to}</span>
                  </li>
                  <li>
                    <span>{promo}</span>
                  </li>
                  <li>
                    <span>{status}</span>
                  </li>
                </ul>
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <div className="table-list">
            <span>No Transaction Yet</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
