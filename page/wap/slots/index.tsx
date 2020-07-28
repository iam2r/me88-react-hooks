import React, { useEffect, useRef, useState, useMemo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { useStore } from "root/page/wap/hooks";
import WapLayout from "root/layout/WapLayout";
import Acctbar from "root/component/wap/Acctbar";
import SubMenu from "root/component/wap/SubMenu";
import GameList from "root/component/GameList";
import { TweenMax, Linear } from "gsap";
let tween1: any, tween2: any;
export default function Slots(props: any) {
  const [state, setState] = useState({
    brandActive: -1,
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
    // gameList.sort(() => Math.random() - 0.5);
    if (type == "type") {
      setState({ ...state, gameList, typeActive: index });
    } else {
      setState({ ...state, gameList, brandActive: index });
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
    <WapLayout>
      <div className="slots-page">
        <Acctbar />
        <div
          className="slots-box-container"
          data-page={state.brandActive == -1 ? "brand" : "games"}
        >
          <CSSTransition
            in={state.brandActive == -1}
            classNames="fade-next"
            timeout={500}
            unmountOnExit
          >
            <div className="brand-page">
              <SubMenu />
              <div className="slots-list-box">
                <span className="item-title">SELECT YOUR SLOTS PROVIDERS</span>
                <ul>
                  {state.brandList.map(({ key }, i) => (
                    <li
                      key={key}
                      onClick={() => {
                        setState({ ...state, brandActive: i, typeActive: 0 });
                      }}
                    >
                      <img
                        src={
                          require("root/assets/images/slots/mobile/" +
                            key +
                            ".png").default
                        }
                        alt=""
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CSSTransition>
          <CSSTransition
            in={state.brandActive != -1}
            classNames="fade-next"
            timeout={500}
            unmountOnExit
          >
            <div className="gamelist-page">
              <div className="tools-box">
                <div className="btn-box">
                  <span
                    className="icon-box"
                    onClick={() => {
                      setState({ ...state, brandActive: -1, typeActive: 0 });
                    }}
                  >
                    <i className="icon-back2"></i>
                  </span>
                  <span className="icon-box">
                    {state.brandActive != -1 && (
                      <img
                        src={
                          require("root/assets/images/slots/icon/" +
                            state.brandList[state.brandActive].key +
                            "_on.png").default
                        }
                        alt=""
                      />
                    )}
                  </span>
                  {state.brandActive != -1 && (
                    <span>{state.brandList[state.brandActive].name}</span>
                  )}
                </div>

                <div className="input-box">
                  <input type="text" placeholder="search" />
                  <i className="icon-search"></i>
                </div>
              </div>
              <div className="slots-games-bottom">
                <div className="type-nav-box">
                  <ul className="type-list">
                    {state.typeList.map((name, i) => (
                      <li
                        key={name}
                        className={[i == state.typeActive ? "on" : ""].join(
                          " "
                        )}
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
                  {/* <SwitchTransition mode="out-in">
                    <CSSTransition
                      classNames="fade-next-250"
                      key={state.brandActive + state.typeActive}
                      timeout={250}
                    > */}
                      <GameList list={state.gameList} />
                    {/* </CSSTransition>
                  </SwitchTransition> */}
                  <div className="more-games">
                    <span>more games</span>
                    <span> &gt; </span>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
      </div>
    </WapLayout>
  );
}
