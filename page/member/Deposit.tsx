import React, { FC, useMemo, useState } from "react";

const Deposit: FC = (props: any) => {
  const [state, setState] = useState({
    deposit: {
      active: -1,
      list: [
        {
          key: "eeziepay",
          name: "Eeziepay",
        },
        {
          key: "paytrust",
          name: "Paytrust88",
        },
        {
          key: "help2pay",
          name: "Help2pay",
        },
        {
          key: "bank",
          name: "Bank Transfer",
        },
      ],
    },
    bank: {
      active: -1,
      list: [
        {
          key: "bank_cimb",
          name: "CIMB Bank Berhad",
        },
        {
          key: "bank_pbb",
          name: "Public Bank Berhad",
        },
        {
          key: "bank_hl",
          name: "Hong Leong Bank Berhad",
        },
        {
          key: "bank_mbb",
          name: "MayBank Berhad",
        },
        {
          key: "bank_rhb",
          name: "RHB Banking Group",
        },
      ],
    },
    amount: {
      active: 0,
      list: [50, 100, 300, 500, 1000],
    },
  });

  return (
    <div className="deposit-page">
      <div className="group-item">
        <div className="title">
          <span>Deposit Options</span>
          <span>*</span>
        </div>
        <div className="deposit-options-list">
          <ul>
            {state.deposit.list.map(({ key, name }, i) => (
              <li
                key={key}
                className={[
                  "icon-hover-box",
                  i == state.deposit.active ? "on" : "",
                ].join(" ")}
                onClick={() => {
                  setState({
                    ...state,
                    deposit: { ...state.deposit, active: i },
                  });
                }}
              >
                <span className="icon-box">
                  <i className={"icon-deposit-" + key}></i>
                </span>

                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="group-item">
        <div className="title">
          <span>Bank Options</span>
          <span>*</span>
        </div>
        <div className="bank-list">
          <ul>
            {state.bank.list.map(({ key, name }, i) => (
              <li
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
          </ul>
        </div>
      </div>
      <div className="group-item input-item">
        <div className="title">
          <span>Deposit Amount</span>
          <span>*</span>
        </div>
        <div className="amount-content">
          <div className="input-box">
            <input
              type="text"
              placeholder="Min/Max Limit:50.00/50,000.00"
              value={state.amount.active ? state.amount.active : ""}
              onChange={(e) => {
                setState({
                  ...state,
                  amount: { ...state.amount, active: Number(e.target.value) },
                });
              }}
            />
          </div>
          <ul>
            {state.amount.list.map((item, i) => (
              <li
                key={item}
                className={state.amount.active == item ? "on" : ""}
                onClick={() => {
                  setState({
                    ...state,
                    amount: { ...state.amount, active: item },
                  });
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="notice-box">
        <span className="item-title">IMPORTANT NOTICE</span>
        <ul>
          <li>
            Always check for the latest active deposit bank details before
            making a deposit.
          </li>
          <li>
            For using deposit option "Bank Transfer", Please make the transfer
            before submit the transaction to avoid the transaction is delay.
          </li>
          <li>
            Depositor’s ACCOUNT NAME must match with registered full name. We do
            not encourage transaction made using 3rd party/company account.
          </li>
          <li>
            Please DO NOT fill "BK8" # or any sensitive remarks related to
            gambling as reference/remark in your online transfer transaction.
          </li>
          <li>
            Please take note that 1x turnover is required for all deposits
            made before any withdrawal can be processed.
          </li>
          <li>
            Kindly check with our 24/7 LIVECHAT if your transaction is
            pending for more than 5 minutes.
          </li>
          <li>
            For further inquiries, kindly contact our 24/7 LIVECHAT. Thank
            you.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Deposit;
