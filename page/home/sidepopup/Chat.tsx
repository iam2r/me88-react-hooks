import React, { FC, useState } from "react";
export interface ChatProps {
  doClose: Function;
}
const Chat: FC<ChatProps> = (props: ChatProps) => {
  const [messages, setMessages] = useState([
    {
      isSelf: false,
      name: "Service Jay",
      time: "9.00am",
      content: "Hi, May I help u?",
    },
    { isSelf: true, name: "Me", time: "9.10am", content: "Yes, Thank u" },
  ]);

  const toSend = () => {
    const list = JSON.parse(JSON.stringify(messages));
    list.push(messages[1]);
    setMessages(list);
  };
  const onClose = () => {
    props.doClose && props.doClose();
  };
  return (
    <div className="chat-popup-box">
      <div className="chat-popup">
        <div className="title">
          <i className="icon-more"></i>
          <span>Welcome to ME88</span>
          <div className="btns">
            <i
              className="icon-to-min"
              onClick={() => {
                onClose();
              }}
            ></i>
            <i
              className="icon-close"
              onClick={() => {
                onClose();
              }}
            ></i>
          </div>
        </div>
        <div className="content">
          <ul className="messages-list">
            {messages.map(({ name, time, content, isSelf }, i) => (
              <li key={i + "message"} data-self={isSelf ? "true" : ""}>
                <div className="message-info">
                  <span>{name}</span>
                  <span>{time}</span>
                </div>
                <div className="message-content">{content}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="tools">
          <input type="text" placeholder={"Write a Message..."} />
          <div className="btns">
            <i
              className="icon-send"
              onClick={() => {
                toSend();
              }}
            ></i>
            <i className="icon-attach"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
