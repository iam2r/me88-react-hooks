import React, { FC, useMemo, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Chat from "./sidepopup/Chat";
import ContactUs from "./sidepopup/ContactUs";
import Language from "./sidepopup/Language";
const SidePopup: FC = (props: any) => {
  const [state, setState] = useState({
    showChat: false,
    showLan: false,
    showContact: false,
  });
  return (
    <div className="side-popup">
      <div className="tools-btns">
        <span
          className="btn-chat icon-btn-chat"
          onClick={() => {
            setState({
              showChat: !state.showChat,
              showLan: false,
              showContact: false,
            });
          }}
        ></span>
        <span
          className="btn-lan icon-ms_MS"
          onClick={() => {
            setState({
              showChat: false,
              showLan: !state.showLan,
              showContact: false,
            });
          }}
        ></span>
        <span
          className="btn-other icon-btn-other"
          onClick={() => {
            setState({
              showChat: false,
              showLan: false,
              showContact: !state.showContact,
            });
          }}
        ></span>
      </div>
      <CSSTransition
        classNames="slider-x-right-in"
        in={state.showChat}
        timeout={500}
        unmountOnExit
      >
        <Chat doClose={()=>{setState({...state,showChat:false})}}/>
      </CSSTransition>
      <CSSTransition
        classNames="slider-x-right-in"
        in={state.showContact}
        timeout={500}
        unmountOnExit
      >
        <ContactUs />
      </CSSTransition>
      <CSSTransition
        classNames="slider-x-right-in"
        in={state.showLan}
        timeout={500}
        unmountOnExit
      >
        <Language />
      </CSSTransition>
    </div>
  );
};

export default SidePopup;
