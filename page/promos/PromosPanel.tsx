import React, { FC, useState, useEffect } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { TweenMax } from "gsap";

let tween1: any, tween2: any;
const PromosPanel: FC = (props: any) => {
  const navList = [
    { key: "all", count: 50, isNew: false, name: "All" },
    { key: "sports", count: 8, isNew: true, name: "Sports" },
    { key: "esports", count: 3, isNew: false, name: "Esports" },
    { key: "casino", count: 8, isNew: true, name: "Casino" },
    { key: "slots", count: 5, isNew: true, name: "Slots" },
    { key: "poker", count: 2, isNew: false, name: "Poker" },
    { key: "fishing", count: 5, isNew: false, name: "Fishing" },
    { key: "vip", count: 8, isNew: false, name: "VIP" },
    { key: "special", count: 3, isNew: false, name: "Special" },
  ];

  const promosList = [
    {
      key: "1",
      title: "150% Sport Welcome Bonus",
      content:
        "ME88 would like to welcome you with a 150% Bonus. Register now!",
      info: true,
      apply: true,
      time: "5days 18hours",
      line: "#00a1ff",
    },
    {
      key: "2",
      title: "RM50 Sport Cash Back",
      content:
        "ME88 would like to welcome you with a 150% Bonus. Register now!",
      info: true,
      apply: true,
      time: "3days 5hours",
      line: "#00a1ff",
    },
    {
      key: "3",
      title: "20% Esport Fighting Bonus",
      content:
        "ME88 would like to welcome you with a 150% Bonus. Register now!",
      info: true,
      apply: false,
      time: "5days 18hours",
      line: "#ff4e00",
    },
    {
      key: "4",
      title: "20% Casino Reload Bonus",
      content:
        "ME88 would like to welcome you with a 150% Bonus. Register now!",
      info: true,
      apply: false,
      time: "5days 18hours",
      line: "#cca700",
    },
    {
      key: "5",
      title: "10% Casino Reload Bonus",
      content:
        "ME88 would like to welcome you with a 150% Bonus. Register now!",
      info: true,
      apply: false,
      time: "2days 3hours",
      line: "#cca700",
    },
    {
      key: "6",
      title: "100% Slot Welcome Bonus",
      content:
        "ME88 would like to welcome you with a 150% Bonus. Register now!",
      info: true,
      apply: true,
      time: "3days 5hours",
      line: "#ed1c24",
    },
    {
      key: "7",
      title: "10% Poker Turnover",
      content:
        "ME88 would like to welcome you with a 150% Bonus. Register now!",
      info: true,
      apply: true,
      time: "2days 3hours",
      line: "#c800f9",
    },
    {
      key: "8",
      title: "RM50 Fishing Cash Back",
      content:
        "ME88 would like to welcome you with a 150% Bonus. Register now!",
      info: true,
      apply: true,
      time: "3days 5hours",
      line: "#00dacf",
    },
    {
      key: "9",
      title: "50% Fishing Reload Bonus",
      content:
        "ME88 would like to welcome you with a 150% Bonus. Register now!",
      info: true,
      apply: true,
      time: "2days 3hours",
      line: "#00dacf",
    },
  ];

  const [state, setState] = useState({
    active: 0,
    promosList: promosList
  });


  const toggleTab = (index: number) => {
    promosList.sort(() => Math.random() - 0.5);
    setState({ active: index, promosList });

    tween1 && tween1.kill();
    tween2 && tween2.kill();
    TweenMax.set(".promos-list li", {
      alpha: 0
    });
    tween1 = TweenMax.delayedCall(0.3, function(){
      tween2 = TweenMax.staggerFromTo(".promos-list li", 0.3, {
        y: 20,
        alpha: 0
      }, {
        y: 0,
        alpha: 1
      }, 0.08);
    })
  };

  return (
    <div className="promos-panel">
      <div className="container">
        <div className="promos-box">
          <ul className="promos-nav">
            {navList.map(({ key, count, isNew, name }, i) => (
              <li
                data-key={key}
                key={key}
                onClick={() => {
                  toggleTab(i);
                }}
                className={i == state.active ? "on" : ""}
              >
                <div className="group">
                  <span className="name">
                    {name}
                    {isNew && <span className="new">NEW</span>}
                  </span>
                  <span className="count">{count}</span>
                </div>
              </li>
            ))}
          </ul>
          {/* <SwitchTransition mode="out-in">
            <CSSTransition classNames="fade-next-250" timeout={250} key={state.active}> */}
              <ul className="promos-list">
                {state.promosList.map(
                  ({ key, title, content, info, apply, time, line }) => (
                    <li key={key}>
                      <div className="img">
                        <img
                          data-screen="web|pad"
                          src={
                            require("root/assets/images/promo/" + key + ".png")
                              .default
                          }
                          alt=""
                        />
                        <img
                          data-screen="mobile"
                          src={
                            require("root/assets/images/promo/mobile/" +
                              key +
                              ".png").default
                          }
                          alt=""
                        />
                      </div>
                      <div className="bottom-box">
                        <div className="line-box">
                          <div
                            className="line1"
                            style={{ backgroundColor: line }}
                          ></div>
                          <div
                            className="line2"
                            style={{ backgroundColor: line }}
                          ></div>
                        </div>
                        <div className="text-box">
                          <span className="title">{title}</span>
                          <p className="content">{content}</p>
                        </div>
                        <div className="tools">
                          {info && <span className="btn-info">More Info</span>}
                          {apply && (
                            <span className="btn-apply">Apply Now</span>
                          )}
                        </div>
                        <div className="time-box">
                          <span>Remaining time - </span>
                          <span className="time">{time}</span>
                        </div>
                      </div>
                    </li>
                  )
                )}
              </ul>
            {/* </CSSTransition>
          </SwitchTransition> */}
        </div>
      </div>
    </div>
  );
};

export default PromosPanel;
