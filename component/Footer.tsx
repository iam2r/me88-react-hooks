import React, { FC, useState, useMemo } from "react";

const Footer: FC = (props: any) => {
  const providerList = [
    {
      title: "Support & info",
      type: "text",
      list: [
        { name: "About Us" },
        { name: "Open Account" },
        { name: "Account Terms" },
        { name: "FAQ" },
        { name: "Terms of Service" },
        { name: "Privacy Policy" },
        { name: "Responsible Gaming" },
      ],
    },
    {
      title: "Products",
      type: "text",
      list: [
        { name: "Sports" },
        { name: "E-Sports" },
        { name: "Live Casino" },
        { name: "Slots" },
        { name: "Fishing" },
        { name: "Poker" },
      ],
    },
    {
      title: "Platform",
      type: "text",
      list: [{ name: "Mobile" }],
    },
    {
      title: "License",
      type: "icon",
      list: [
        { name: "pagcor" },
        { name: "godaddy" },
        { name: "iovation" },
        { name: "global" },
        { name: "itechlab" },
        { name: "payouts" },
        { name: "bmm" },
      ],
    },
    {
      title: "Payment Method",
      type: "icon",
      list: [{ name: "eeziepay" }, { name: "paytrust" }, { name: "help2pay" }],
    },
    {
      title: "Follow Us",
      type: "icon",
      list: [{ name: "fb" }, { name: "youtube" }],
    },
  ];

  const lanList = [
    { key: "en_US", name: "English" },
    { key: "zh_CN", name: "简体中文" },
    { key: "ms_MS", name: "Bahasa Malayu" },
    { key: "th_TH", name: "ไทย" },
    { key: "id_ID", name: "Bahasa Indonesia" },
    { key: "vi_VN", name: "Tiếng Việt" },
  ];

  const [lan, setLan] = useState("en_US");
  const currentLanName = useMemo(
    () => lanList.find((it) => it.key == lan)?.name || "English",
    [lan]
  );

  return (
    <div id="footer">
      <div className="top-footer">
        <div className="container">
          <div className="top-footer-box">
            <div className="top">
              <ul className="provider">
                {providerList.map(({ type, title, list }) => (
                  <li key={title} data-type={type}>
                    <div className="title">{title}</div>
                    {list.map(({ name }) =>
                      type == "text" ? (
                        <span key={name}>{name}</span>
                      ) : (
                        <i
                          key={name}
                          className={["icon-" + name].join(" ")}
                        ></i>
                      )
                    )}
                  </li>
                ))}
              </ul>
              <div className="copy-right-box">
                <div className="copy-right">
                  © Copyright 2020 Me88. All rights reserved. 
                  <i className="icon-18"></i>
                </div>
                <div className="current-lan">
                  <i className={["icon-" + lan].join(" ")}></i>
                  <span>{currentLanName}</span>
                </div>
              </div>
            </div>
            <ul className="lan-list">
              {lanList.map(({ key, name }) => (
                <li
                  key={key}
                  className={[key == lan ? "on" : ""].join(" ")}
                  onClick={() => {
                    setLan(key);
                  }}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="second-footer">
        <div className="container">
          <div className="second-footer-box">
            <p>
              www.me88.com is operated byXXXXXXXX., a company incorporated in
              Malaysia under registration number 000000, located at XXXXXXXXXXX,
              PO Box 0000, Malaysia and
              licensed under license number 0000/JAZ issued to Xxxxxx eGaming.
              Payment methods are managed by Xxxxx International Limited, a
              company wholly owned by XXXXXXXX,
              incorporated in Malta under company number C00000 and located at
              Xxxxxxxx Xxxxxxxx Xxxxxxxx, Level 2, Xxxxxxx Xxxxxx, Xxxxx
              Xxxxxxxx BKR 0000, Malaysia.
            </p>
            <p data-screen="mobile" style={{display:'none'}}>
            www.me88.com is operated byXXXXXXXX., a company incorporated in Malaysia under registration number 000000, located at XXXXXXXXXXX, PO Box 0000, Malaysia and licensed under license number 0000/JAZ issued to Xxxxxx eGaming. 
            </p>
            <i className="icon-logo-footer"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
