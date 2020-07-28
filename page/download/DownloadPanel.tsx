import React, { FC, useState } from "react";

const DownloadPanel: FC = (props: any) => {
  const [state, setState] = useState({
    active: 0,
    list: [
      {
        name: "918KISS",
        bgimg: require("root/assets/images/download/1.png").default,
        qr: {
          android: require("root/assets/images/download/qrcode.png").default,
          ios: require("root/assets/images/download/qrcode.png").default,
        },
      },
      {
        name: "ALLBET",
        bgimg: require("root/assets/images/download/2.png").default,
        qr: {
          android: require("root/assets/images/download/qrcode.png").default,
          ios: require("root/assets/images/download/qrcode.png").default,
        },
      },
      {
        name: "ALLBET",
        bgimg: require("root/assets/images/download/3.png").default,
        qr: {
          android: require("root/assets/images/download/qrcode.png").default,
          ios: require("root/assets/images/download/qrcode.png").default,
        },
      },
      {
        name: "GAMEPLAY",
        bgimg: require("root/assets/images/download/4.png").default,
        qr: {
          android: require("root/assets/images/download/qrcode.png").default,
          ios: require("root/assets/images/download/qrcode.png").default,
        },
      },
      {
        name: "DREAMGAMING",
        bgimg: require("root/assets/images/download/5.png").default,
        qr: {
          android: require("root/assets/images/download/qrcode.png").default,
          ios: require("root/assets/images/download/qrcode.png").default,
        },
      },
      {
        name: "ASIAGAMING",
        bgimg: require("root/assets/images/download/6.png").default,
        qr: {
          android: require("root/assets/images/download/qrcode.png").default,
          ios: require("root/assets/images/download/qrcode.png").default,
        },
      },
      {
        name: "PLAYTECH",
        bgimg: require("root/assets/images/download/7.png").default,
        qr: {
          android: require("root/assets/images/download/qrcode.png").default,
          ios: require("root/assets/images/download/qrcode.png").default,
        },
      },
      {
        name: "PLAYTECH (Slots)",
        bgimg: require("root/assets/images/download/8.png").default,
        qr: {
          android: require("root/assets/images/download/qrcode.png").default,
          ios: require("root/assets/images/download/qrcode.png").default,
        },
      },
      {
        name: "MEGA888",
        bgimg: require("root/assets/images/download/9.png").default,
        qr: {
          android: require("root/assets/images/download/qrcode.png").default,
          ios: require("root/assets/images/download/qrcode.png").default,
        },
      },
    ],
  });

  return (
    <div className="download-panel">
      <div className="container">
        <div className="download-list">
          <ul className="download-nav">
            <li
              className={["icon-hover-box",state.active == 0 ? "on" : ""].join(" ")}
              onClick={() => {
                setState({ ...state, active: 0 });
              }}
            >
              <i
                className={["icon-android", state.active == 0 ? "on" : ""].join(
                  " "
                )}
              ></i>
              <span>Android</span>
            </li>
            <li
              className={["icon-hover-box",state.active == 1 ? "on" : ""].join(" ")}
              onClick={() => {
                setState({ ...state, active: 1 });
              }}
            >
              <i
                className={["icon-ios", state.active == 1 ? "on" : ""].join(
                  " "
                )}
              ></i>
              <span>IOS</span>
            </li>
          </ul>
          <ul className="download-items">
            {state.list.map(({ name, bgimg, qr },i) => (
              <li key={name+i} className="download-item">
                <div className="img">
                    <img src={bgimg} data-screen="web|pad" alt=""/>
                    <img src={ require("root/assets/images/download/mobile/" + (i+1) + ".png")
                            .default} data-screen="mobile" alt=""/>
                </div>
                <div className="other">
                  <div className="tools">
                    <span>download</span>
                    <span>QR code
                      <div className="qr-box">
                          <img src={state.active==0?qr.android:qr.ios} alt=""/>
                      </div>
                    </span>
                   
                  </div>
                  <span>{name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DownloadPanel;
