import React, { FC, useMemo, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Slider from "root/component/Slider";
import SliderMobile from "root/component/Slider2";
const SportsGames: FC = (props: any) => {
  const [state, setState] = useState({ active: 0 });

  const items = [
    {
      content: (
        <div className="item-content">
          <span className="icon-box">
            <i className="icon-cmd368"></i>
          </span>

          <p>
            Over 25,000 Sport Match,
            <br />
            200 Different Betting,
            <br />
            Over 80 Different Sport Option
            <br />
            Bet For Fun!
          </p>
          <span className="btn">Play Now</span>
        </div>
      ),

      tab: (
        <div>
          <span>C-SPORT</span>
        </div>
      ),
    },
    {
      content: (
        <div className="item-content">
          <span className="icon-box">
            {" "}
            <i className="icon-maxbet"></i>
          </span>

          <p>
            Over 25,000 Sport Match,
            <br />
            200 Different Betting,
            <br />
            Over 80 Different Sport Option
            <br />
            Bet For Fun!
          </p>
          <span className="btn">Play Now</span>
        </div>
      ),

      tab: (
        <div>
          <span>I-SPORT</span>
        </div>
      ),
    },
    {
      content: (
        <div className="item-content">
          <span className="icon-box">
            {" "}
            <i className="icon-betradar"></i>
          </span>

          <p>
            Over 25,000 Sport Match,
            <br />
            200 Different Betting,
            <br />
            Over 80 Different Sport Option
            <br />
            Bet For Fun!
          </p>
          <span className="btn">Play Now</span>
        </div>
      ),

      tab: (
        <div>
          <span>VIRTUAL SPORT</span>
        </div>
      ),
    },
  ];

  const mobileDom = useMemo(
    () => (
      <div className="sports-games-slider-box" data-screen="mobile">
        <SliderMobile
          activedIndex={0}
          space={"0.31rem"}
          items={items}
        />
      </div>
    ),
    []
  );

  return (
    <div className="sports-games">
      <div className="item-title">BEST SPORTS GAMES</div>
      <TransitionGroup className="content-item" data-screen="web|pad">
        <CSSTransition key={state.active} timeout={500} classNames="fade-next" >
          {items[state.active].content}
        </CSSTransition>
      </TransitionGroup>
      <div className="sports-games-slider-box" data-screen="web|pad">
        <Slider
          items={items}
          transionName="slider-fade"
          onChange={(active) => {
            setState({ ...state, active });
          }}
        />
      </div>
      {mobileDom}
    </div>
  );
};

export default SportsGames;
