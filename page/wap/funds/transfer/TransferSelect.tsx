import React, { FC, useMemo, useState, useEffect, useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const TransferSelect: FC = (props: any) => {
  const [state, setState] = useState({
    typeIndex: 0,
    itemIndex: 0,
    showItem: false,
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
        list: ["Golden Deluxe", "Live Casino2", "Live Casino3"],
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
 
  const currentSelectRef = useRef();
  const itemRef = useRef();

  const currentSelect = useMemo(() => {
    return state.typeList[state.typeIndex].list[state.itemIndex];
  }, [state.typeIndex, state.itemIndex]);

  const toggleShowItem = (isShow?: boolean) => {
    setState((state) => {
      return { ...state, showItem: isShow ?? !state.showItem };
    });
  };

  const clickListOut = (e: any) => {
    if (state.showItem) {
      const stopEventEl: HTMLElement[] = [
        currentSelectRef.current,
        itemRef.current,
      ];
      for (let index = 0; index < stopEventEl.length; index++) {
        let child = stopEventEl[index];
        if (child && child.contains(e.target)) {
          return;
        }
      }

      setState((state) => ({ ...state, showItem: false }));
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
    <div className="transfer-select">
      <div className="type-list">
        <ul>
          {state.typeList.map(({ name, key }, i) => (
            <li
              key={key}
              className={[i == state.typeIndex ? "on" : ""].join(" ")}
              onClick={() => {
                setState((state) => ({ ...state, typeIndex: i, itemIndex: 0 }));
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

      <div
        ref={currentSelectRef}
        className={["current-select",state.showItem?'on':''].join(" ")}
        onClick={() => {
          toggleShowItem();
        }}
      >
        <span>{currentSelect}</span>

        <CSSTransition
          classNames="spread-bottom"
          in={state.showItem}
          timeout={300}
          unmountOnExit
        >
          <ul
            className="item-list-box"
            ref={itemRef}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {state.typeList[state.typeIndex].list.map((item, i) => (
              <li
                key={item}
                className={[i == state.itemIndex ? "on" : ""].join(" ")}
                onClick={() => {
                  setState((state) => ({
                    ...state,
                    itemIndex: i,
                    showItem: false,
                  }));
                }}
              >
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CSSTransition>
        <div className="group">
          <span>0.00</span>
          <span className="icon-box">
            <CSSTransition
              classNames="rotate180"
              in={state.showItem}
              timeout={300}
            >
              <i className="icon-arrow2"></i>
            </CSSTransition>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TransferSelect;
