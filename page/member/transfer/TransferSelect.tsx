import React, { FC, useMemo, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
export interface TransferSelectProps {
  onClose?: () => void;
}
const TransferSelect: FC<TransferSelectProps> = (
  props: TransferSelectProps
) => {
  const [state, setState] = useState({
    typeIndex: 0,
    itemIndex: -1,
    typeList: [
      {
        key: "sports",
        name: "Sports",
        list: ["Bk8", "C-Sports", "i-Sports", "Virtual-Sports"],
      },
      {
        key: "esports",
        name: "Esports",
        list: ["esports1", "esports2", "esports3"],
      },
      {
        key: "live_casino",
        name: "Live Casino",
        list: ["Live Casino1", "Live Casino2", "Live Casino3"],
      },
      {
        key: "slots",
        name: "Slots",
        list: ["Slots1", "Slots2", "Slots3"],
      },
      {
        key: "fishing",
        name: "Fishing",
        list: ["Fishing1", "Fishing2", "Fishing3"],
      },
      {
        key: "poker",
        name: "Poker",
        list: ["Poker1", "Poker2", "Poker3"],
      },
    ],
  });
  return (
    <div className="transfer-select">
      <div className="type-list">
        <ul>
          {state.typeList.map(({ name, key }, i) => (
            <li
              key={key}
              className={[i == state.typeIndex ? "on" : ""].join(" ")}
              onClick={() => {
                setState({ ...state, typeIndex: i, itemIndex: -1 });
              }}
            >
              <span className="icon-box">
                <i className={"icon-" + key}></i>
              </span>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>

      <TransitionGroup className="item-list">
        <CSSTransition
          timeout={500}
          classNames="fade-prev"
          key={state.typeIndex}
        >
          <ul>
            {state.typeList[state.typeIndex].list.map((item, i) => (
              <li
                key={item}
                className={[i == state.itemIndex ? "on" : ""].join(" ")}
                onClick={() => {
                  setState({ ...state, itemIndex: i });
                  props.onClose && props.onClose();
                }}
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default TransferSelect;
