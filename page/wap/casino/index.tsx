import React, { useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useStore } from "root/page/wap/hooks";
import WapLayout from "root/layout/WapLayout";
import Acctbar from "root/component/wap/Acctbar";
import SubMenu from "root/component/wap/SubMenu";

export default function Casino(props: any) {
  const list = [
    {
      key: "gameplay",
      text: <p>Innovative Casino Games With Asian & European Live Dealers!</p>,
    },
    {
      key: "ag",
      text: (
        <p>
          Innovative casino games with <br />
          Asian live dealers!
        </p>
      ),
    },
    {
      key: "sa_gaming",
      text: (
        <p>
          Innovative casino games with <br />
          Asian live dealers!
        </p>
      ),
    },
    {
      key: "dream_gaming",
      text: (
        <p>
          Innovative casino games with <br />
          Asian live dealers!
        </p>
      ),
    },
    {
      key: "ae_sexy",
      text: (
        <p>
          Innovative casino games with <br />
          Asian live dealers!
        </p>
      ),
    },

    {
      key: "ebet",
      text: (
        <p>
          Innovative casino games with <br />
          Asian live dealers!
        </p>
      ),
    },

    {
      key: "allbet",
      text: (
        <p>
          Innovative casino games with <br />
          Asian live dealers!
        </p>
      ),
    },

    {
      key: "evolution",
      text: (
        <p>
          Innovative casino games with <br />
          Asian live dealers!
        </p>
      ),
    },
    {
      key: "mg_live",
      text: (
        <p>
          Innovative casino games with <br />
          Asian live dealers!
        </p>
      ),
    },

    {
      key: "playtech",
      text: (
        <p>
          Innovative casino games with <br />
          Asian live dealers!
        </p>
      ),
    },

    {
      key: "gd",
      text: (
        <p>
          Innovative casino games with <br />
          Asian live dealers!
        </p>
      ),
    },
  ];

  return (
    <WapLayout>
      <div className="casino-page">
        <Acctbar />
        <div className="casino-box-container">
          <SubMenu />
          <div className="casino-list-box">
            <span className="item-title">INNOVATIVE LIVE CASINO GAMES</span>
            <ul>
              {list.map(({ key, text }, i) => (
                <li key={key}>
                  <img
                    src={
                      require("root/assets/images/casino/mobile/" +
                        key +
                        ".png").default
                    }
                    alt=""
                  />
                  {i == 0 && text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </WapLayout>
  );
}
