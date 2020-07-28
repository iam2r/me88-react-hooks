import React, { FC, useMemo, useState } from "react";

const WithDraw: FC = (props: any) => {
  const [state, setState] = useState({
    bank: {
      active: -1,
      list: [
        {
          key: "bank_cimb",
          name: "CIMB Bank",
        },
        {
          key: "bank_pbb",
          name: "Public Ban",
        },
        {
          key: "bank_hl",
          name: "Hong Leong",
        },
        {
          key: "bank_alliance",
          name: "Alliance Bank",
        },
        {
          key: "bank_scb",
          name: "SCB",
        },
        {
          key: "bank_mbb",
          name: "MayBank",
        },
        {
          key: "bank_rhb",
          name: "RHB Banking",
        },
        {
          key: "bank_uob",
          name: "UOB Bank",
        },
        {
          key: "bank_ocbc",
          name: "OCBC Bank",
        },
        {
          key: "bank_hsbc",
          name: "HSBC",
        },
        {
          key: "bank_citi",
          name: "Citi Bank",
        },
        {
          key: "bank_rakyat",
          name: "Bank Rakyat",
        },
        {
          key: "bank_islam",
          name: "Bank Islam",
        },
        {
          key: "bank_affin",
          name: "Affin Bank",
        },
        {
          key: "bank_bsn",
          name: "BSN",
        },
        {
          key: "bank_am",
          name: "AmBank",
        },
      ],
    },
  });

  return (
    <div className="withdraw-page">
      <div className="group-item">
        <div className="title">
          <span>Bank Options</span>
          <span>*</span>
        </div>
        <div className="bank-list">
          <ul>
            {state.bank.list.map(({ key, name }, i) => (
              <li
                data-column={i%5}
                key={key}
                className={[
                  "icon-hover-box",
                  i == state.bank.active ? "on" : "",
                ].join(" ")}
                onClick={() => {
                  setState({
                    ...state,
                    bank: { ...state.bank, active: i },
                  });
                }}
              >
                <span className="icon-box">
                  <i className={"icon-" + key}></i>
                </span>

                <span>{name}</span>
              </li>
            ))}
            <li className="other-banks">
              <span>Other Banks</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="group-item input-item">
        <div className="title">
          <span>Account Name</span>
          <span>*</span>
        </div>
        <div className="group">
          <div className="input-box">
            <input type="text" placeholder="Account Name" />
          </div>
        </div>
      </div>
      <div className="group-item input-item">
        <div className="title">
          <span>Account Number</span>
          <span>*</span>
        </div>
        <div className="group">
          <div className="input-box">
            <input type="text" placeholder="Account Number" />
          </div>
        </div>
      </div>
      <div className="group-item input-item">
        <div className="title">
          <span>Amount</span>
          <span>*</span>
        </div>
        <div className="group">
          <div className="input-box">
            <input type="text" placeholder="Min/Max Limit : 50.00 / 30,000.00" />
          </div>
        </div>
      </div>
     <span className="btn-submit">
         SUBMIT
     </span>
      <div className="notice-box">
        <span className="item-title">IMPORTANT NOTICE</span>
        <ul>
          <li>
            Kindly check with our 24/7 LIVECHAT if your transaction is pending
            for more than 5 minutes.
          </li>
          <li>
            For further inquiries, kindly contact our 24/7 LIVECHAT. Thank you.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WithDraw;
