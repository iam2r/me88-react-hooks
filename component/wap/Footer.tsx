import React, { FC, useMemo, useState } from "react";
import WebFooter from "../Footer";
import { useStore } from "root/page/wap/hooks";
const Footer: FC = (props) => {
  const { state: globaState, dispatch } = useStore();
  const list = [
    { key: "whatsapp", value: "018 888 8888" ,name:"Whatsapp"},
    { key: "wechat", value: "ME88CS.Help",name:"Wechat" },
    { key: "skype", value: "ME88CS.Help",name:"Skype" },
    { key: "livechat", value: "CLICK HERE" ,name:"Live Chat"},
  ];
  return (
    <div className="mobile-footer"  data-logined={globaState.isLogined}>
      <div className="contact-box">
        <span className="title">
          CONTACT US 24 HOURS SERVICE
        </span>
        <ul>
        {list.map(({ key, value,name }) => (
          <li key={key}>
            <span className="icon-box">
                 <i className={"icon-" + key}></i>
            </span>
            <span>{name}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
      </div>
      <WebFooter />
    </div>
  );
};

export default Footer;
