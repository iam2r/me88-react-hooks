import React, { useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useStore } from "root/page/wap/hooks";
import WapLayout from "root/layout/WapLayout";
import Banner from "root/page/home/Banner";
import Notice from "root/component/Notice";
import Acctbar from "root/component/wap/Acctbar";
import SubMenu from "root/component/wap/SubMenu";
import SportsGames from "root/page/home/sports/SportsGames";
import UPEvents from "root/page/home/sports/UPEvents";
import DroppingHot from "root/page/home/DroppingHot";
import Donotmiss from "root/page/home/Donotmiss";

export default function Home(props: any) {
  
  const items = [
    {
      content: (
        <div>
          <img
            src={
              require("root/assets/images/homepage/mobile/banner.png").default
            }
            alt=""
          />
        </div>
      ),
    },
    {
      content: (
        <div>
          <img
            src={
              require("root/assets/images/homepage/mobile/banner2.png").default
            }
            alt=""
          />
        </div>
      ),
    },
    {
      content: (
        <div>
          <img
            src={
              require("root/assets/images/homepage/mobile/banner.png").default
            }
            alt=""
          />
        </div>
      ),
    },
    {
      content: (
        <div>
          <img
            src={
              require("root/assets/images/homepage/mobile/banner2.png").default
            }
            alt=""
          />
        </div>
      ),
    },
    {
      content: (
        <div>
          <img
            src={
              require("root/assets/images/homepage/mobile/banner.png").default
            }
            alt=""
          />
        </div>
      ),
    },
  ];

  return (
    <WapLayout>
      <div className="home-page">
        <Banner items={items} />
        <Notice />

        <Acctbar />

        <div className="sports-box">
          <SubMenu />
          <div className="group">
            <SportsGames />
            <UPEvents />
          </div>
        </div>
        <DroppingHot />
        <Donotmiss />
      </div>
    </WapLayout>
  );
}
