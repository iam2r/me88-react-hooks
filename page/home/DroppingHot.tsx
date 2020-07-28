import React, { FC, useState, useEffect } from "react";
import Slider from "root/component/Slider";
import GameList from "root/component/GameList";
import {
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";
const DroppingHot: FC = (props: any) => {
  const getItems = () => {
    return [
      {
        content: (
          <div>
            <img
              src={
                require("root/assets/images/homepage/top game/character.png")
                  .default
              }
              alt=""
            />
            <div className="content">
              <span className="jackpot">PROGRESSIVE JACKPOT</span>
              <div className="icon-box">
                <i className="icon-mega888"></i>
              </div>
              <span>MYR 888,888,88</span>
            </div>
          </div>
        ),
      },
      {
        content: (
          <div>
            <img
              src={
                require("root/assets/images/homepage/top game/character.png")
                  .default
              }
              alt=""
            />
            <div className="content">
              <span className="jackpot">PROGRESSIVE JACKPOT</span>
              <div className="icon-box">
                <i className="icon-mega888"></i>
              </div>
              <span>MYR 888,888,88</span>
            </div>
          </div>
        ),
      },
      {
        content: (
          <div>
            <img
              src={
                require("root/assets/images/homepage/top game/character.png")
                  .default
              }
              alt=""
            />
            <div className="content">
              <span className="jackpot">PROGRESSIVE JACKPOT</span>
              <div className="icon-box">
                <i className="icon-mega888"></i>
              </div>
              <span>MYR 888,888,88</span>
            </div>
          </div>
        ),
      },
    ];
  };

  const navList = [
    { name: "RECOMMEND GAMES" },
    { name: "NEW GAMES" },
    { name: "HOT GAMES" },
  ];

  const gameList = [
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
  ];

  const [state, setState] = useState({
    active: 0,
    list: [],
  });

  useEffect(() => {
    setTimeout(() => {
      //mock请求
      setState((state) => ({ ...state, list: gameList }));
    }, 100);
  }, []);

  const toggleTab = (index: number) => {
    if (index == state.active) return;
    const list = gameList.sort(() => Math.random() - 0.5);
    setState({ list, active: index });
  };

  return (
    <div className="dropping-hot">
      <div className="container">
        <span className="item-title">DROPPING LIKE IT'S HOT!</span>
        <div className="group">
          <div className="slider-box">
            <Slider items={getItems()} transionName="slider-fade" />
          </div>
          <div className="games-list">
            <ul className="nav-tabs">
              {navList.map(({ name }, i) => (
                <li
                  className={[i == state.active ? "on" : ""].join(" ")}
                  key={name}
                  onClick={() => {
                    toggleTab(i);
                  }}
                >
                  {i == 0 && <span data-screen="mobile">RECOMMEND</span>}
                  <span> {name} </span>
                </li>
              ))}

              <div className="more-games" data-screen="web|pad">
                <span>more games</span>
                <span> &gt; </span>
              </div>
              <div className="more-games" data-screen="mobile">
                <span>MORE</span>
                <span> &gt; </span>
              </div>
            </ul>
            {state.list.length && (
              <TransitionGroup className="game-content-container">
                <CSSTransition
                  key={state.active}
                  classNames="fade-next"
                  timeout={500}
                >
                  <GameList list={state.list} />
                </CSSTransition>
              </TransitionGroup>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroppingHot;
