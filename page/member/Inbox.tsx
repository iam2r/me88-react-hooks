import React, { FC, useMemo, useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import FlipMove from "react-flip-move";
const Inbox: FC = (props: any) => {
  const [state, setState] = useState({
    list: [],
  });

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        list: [
          {
            date: "17/12/2019 17:14",
            content: "Stop Account for MYR Deposit (CIMB KS TAN ********9014)",
          },
          {
            date: "17/12/2019 17:14",
            content: "Me88 Wechat Service Notice",
          },
          {
            date: "17/12/2019 17:14",
            content: "Rebate Release Delay - 8/11/2019",
          },
        ],
      });
    });
  }, []);

  const deleteItem = (i: number) => {
    const list = state.list;
    list.splice(i, 1);
    setState({ ...state, list });
  };
  return (
    <div className="inbox-page">
      <div className="inbox-list">
        <div className="table-header">
          <ul>
            <li>Date</li>
            <li>Subject</li>
            <li></li>
          </ul>
        </div>
        <FlipMove
          className="table-list"
          enterAnimation="fade"
          leaveAnimation="fade"
        >
          {state.list.map(({ date, content }, i) => (
            <ul key={content}>
              <li>
                <span>{date}</span>
              </li>
              <li>
                <span>{content}</span>
              </li>

              <li>
                <i
                  className="icon-delete"
                  onClick={() => {
                    deleteItem(i);
                  }}
                ></i>
              </li>
            </ul>
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default Inbox;
