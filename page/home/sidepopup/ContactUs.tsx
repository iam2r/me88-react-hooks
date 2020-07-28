import React, { FC, useMemo } from "react";

const ContactUs: FC = (props: any) => {
  const list = [
    { key: "whatsapp", value: "018 888 8888" },
    { key: "wechat", value: "ME88CS.Help" },
    { key: "skype", value: "ME88CS.Help" },
    { key: "download", value: "Download" },
  ];
  return (
    <div className="contact-popup">
      <ul>
        {list.map(({ key, value }) => (
          <li key={key}>
            <span className="icon-box">
                 <i className={"icon-" + key}></i>
            </span>
           
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactUs;
