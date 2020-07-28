import React, { FC, useMemo, useState, useEffect } from "react";
import GameList from "root/component/GameList";
import { CSSTransition,SwitchTransition } from "react-transition-group";
import { TweenMax, Linear } from "gsap";
let tween1: any, tween2: any;
const SlotsGames: FC = (props: any) => {
  const [state, setState] = useState({
    brandActive: 0,
    typeActive: 0,
    typeList: ["All", "Hot", "New", "Slot", "Table", "Arcade"],
    brandList: [
      { name: "Spadegaming", key: "sg" },
      { name: "Pragmatic", key: "pm" },
      { name: "Mircogaming", key: "mg" },
      { name: "Ultimate", key: "um" },
      { name: "Playtech", key: "pt" },
      { name: "Play n Go", key: "pg" },
      { name: "Sa Gaming", key: "sa" },
      { name: "Gameplay", key: "gp" },
      { name: "Asiangaming", key: "ag" },
      { name: "Top Trend", key: "tt" },
      { name: "Mega888", key: "m8" },
      { name: "918kiss", key: "918kiss" },
    ],
    gameList: [
      {
        key: "tp",
        name: "Triple Panda",
        love: false,
      },
      {
        key: "pw",
        name: "Princess Wang",
        love: false,
      },
      {
        key: "gm",
        name: "Golden Monkey",
        love: false,
      },
      {
        key: "ze",
        name: "Zeus",
        love: false,
      },
      {
        key: "gls",
        name: "Golden Lotus SE",
        love: false,
      },
      {
        key: "lk",
        name: "Lucky Koi",
        love: false,
      },
      {
        key: "dfxf",
        name: "Da Fu Xiao Fu",
        love: false,
      },
      {
        key: "ml",
        name: "Magical Lamp",
        love: false,
      },
      {
        key: "pg",
        name: "Prosperity Gods",
        love: false,
      },
      {
        key: "jk",
        name: "Jungle King",
        love: false,
      },
    ],
  });



  const toggleTab = (index: number, type: string = "type") => {
    if (type == "type" && index == state.typeActive) return;
    const gameList = state.gameList;
    gameList.sort(() => Math.random() - 0.5);
    if (type == "type") {
      setState({ ...state,  gameList, typeActive: index });
    } else {
      setState({ ...state,  gameList, brandActive: index });
    }

    tween1 && tween1.kill();
    tween2 && tween2.kill();

    TweenMax.set("ul.game-content li", {
      alpha: 0
    });

    tween1 = TweenMax.delayedCall(0.3, function(){
      tween2 = TweenMax.staggerTo("ul.game-content li", 0.3, {
        alpha: 1
      }, 0.08)
    })
    

  };
  return (
    <div className="slots-games">
      <div className="container">
        <div className="slots-games-items">
          <ul className="brand-list">
            {state.brandList.map(({ key, name }, i) => (
              <li
                key={key}
                className={[i == state.brandActive ? "on" : ""].join(" ")}
                onClick={() => {
                  toggleTab(i, "brand");
                }}
              >
                <span className="icon-box">
                  <i className={["on", "icon-brand-" + key].join(" ")}></i>
                  <i className={["icon-brand-" + key].join(" ")}></i>
                </span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
          <div className="slots-games-right">
            <div className="type-nav-box">
              <ul className="type-list">
                {state.typeList.map((name, i) => (
                  <li
                    key={name}
                    className={[i == state.typeActive ? "on" : ""].join(" ")}
                    onClick={() => {
                      toggleTab(i);
                    }}
                  >
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
              <div className="search-box">
                <input type="text" placeholder={"search"} />
                <i className="icon-search"></i>
              </div>
            </div>
            <div className="type-game-list-box">
              {/* <SwitchTransition>
              <CSSTransition
                classNames="fade-next-250"
                key={state.brandActive+state.typeActive}
                timeout={250}
              > */}
                <GameList list={state.gameList} />
              {/* </CSSTransition>
              </SwitchTransition> */}
              <div
                className="more-games"
              >
                <span>more games</span>
                <span> &gt; </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotsGames;
