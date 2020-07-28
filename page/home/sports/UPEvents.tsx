import React, { FC, useMemo } from "react";
import Slider from "root/component/Slider";
import SliderMobile from "root/component/Slider2";
const UPEvents: FC = (props: any) => {
  const getItems = () => {
    return [
      {
        content: (
          <div className="item-match">
            <span className="icon-epl"></span>

            <div className="teams">
              <div className="team">
                <i className="icon-team-bg">
                  <i className="icon-team-mu"></i>
                </i>
                <span>Man United</span>
              </div>
              <div className="info">
                <span className="time">
                  02/01/2020
                  <br />
                  22.30
                </span>
                <span className="vs">VS</span>
                <span className="btn">Bet Now</span>
              </div>
              <div className="team">
                <i className="icon-team-bg">
                  <i className="icon-team-mc"></i>
                </i>
                <span>Man City</span>
              </div>
            </div>
            <ul className="nums-list">
              <li>
                <span>2.12</span>
                <span>win</span>
              </li>
              <li>
                <span>3.35</span>
                <span>lose</span>
              </li>
              <li>
                <span>3.25</span>
                <span>draw</span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        content: (
          <div className="item-match">
            <span className="icon-epl"></span>

            <div className="teams">
              <div className="team">
                <i className="icon-team-bg">
                  <i className="icon-team-mu"></i>
                </i>
                <span>Man United</span>
              </div>
              <div className="info">
                <span className="time">
                  02/01/2020
                  <br />
                  22.30
                </span>
                <span className="vs">VS</span>
                <span className="btn">Bet Now</span>
              </div>
              <div className="team">
                <i className="icon-team-bg">
                  <i className="icon-team-mc"></i>
                </i>
                <span>Man City</span>
              </div>
            </div>
            <ul className="nums-list">
              <li>
                <span>2.12</span>
                <span>win</span>
              </li>
              <li>
                <span>3.35</span>
                <span>lose</span>
              </li>
              <li>
                <span>3.25</span>
                <span>draw</span>
              </li>
            </ul>
          </div>
        ),
      },
      {
        content: (
          <div className="item-match">
            <span className="icon-epl"></span>

            <div className="teams">
              <div className="team">
                <i className="icon-team-bg">
                  <i className="icon-team-mu"></i>
                </i>
                <span>Man United</span>
              </div>
              <div className="info">
                <span className="time">
                  02/01/2020
                  <br />
                  22.30
                </span>
                <span className="vs">VS</span>
                <span className="btn">Bet Now</span>
              </div>
              <div className="team">
                <i className="icon-team-bg">
                  <i className="icon-team-mc"></i>
                </i>
                <span>Man City</span>
              </div>
            </div>
            <ul className="nums-list">
              <li>
                <span>2.12</span>
                <span>win</span>
              </li>
              <li>
                <span>3.35</span>
                <span>lose</span>
              </li>
              <li>
                <span>3.25</span>
                <span>draw</span>
              </li>
            </ul>
          </div>
        ),
      }
    ];
  };

  const getNavs = ()=>{
      return <i className="icon-arrow-left"></i>
  }

  return (
    <div className="up-events">
      <div className="item-title">UPCOMING EVENTS</div>
      <div className="slider-box" data-screen="web" key="web">
         <Slider items={getItems()} navigation={getNavs()} transionName="slider-fade" />
        
      </div>
      <div className="slider-box" data-screen="pad" key="pad">
       <SliderMobile space={'0.32rem'} items={getItems()} />
      </div>
      <div className="slider-box" data-screen="mobile" key="mobile">
       <SliderMobile activedIndex={0} space={'0.30rem'} items={getItems()} />
      </div>

    </div>
  );
};

export default UPEvents;
