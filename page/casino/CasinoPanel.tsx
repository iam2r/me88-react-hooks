import React, { FC, useState } from "react";
import Slider from "root/component/Slider";
const Casino: FC = (props: any) => {
  const list = [
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
      key: "gameplay",
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

  const getItems = () =>
    list.map(({ key, text }) => ({
      content: (
        <div>
          <img
            src={require("root/assets/images/casino/" + key + ".png").default}
            alt=""
          />
          <div className="container">
            <div className="content">
              <span className="icon-box">
                <i className={"icon-" + key}></i>
              </span>
              {text}
              <span className="btn">PLAY NOW</span>
            </div>
          </div>
        </div>
      ),
      tab: (
        <div>
          <i className={["icon-small-" + key, "gray"].join(" ")}></i>
          <i className={["icon-small-" + key, "on"].join(" ")}></i>
        </div>
      ),
    }));

  return (
    <div className="casino-panel">
      <Slider items={getItems()} />
    </div>
  );
};

export default Casino;
