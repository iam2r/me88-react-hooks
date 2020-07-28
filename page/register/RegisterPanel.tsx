import React, { FC, useState, useMemo } from "react";
import { CSSTransition } from "react-transition-group";
export interface RegisterPanelProp {
  onClose?: () => void;
  toDeposit?: () => void;
}
const RegisterPanel: FC<RegisterPanelProp> = (props: RegisterPanelProp) => {
  const [state, setState] = useState({
    active: 0,
    list: [
      { value: "Account Setup" },
      { value: "Personal Details" },
      { value: "Completed" },
    ],
  });
  const title = useMemo(
    () => `Step ${state.active + 1} of ${state.list.length}`,
    [state.active]
  );

  const step1 = () => (
    <div className="step1-box">
      <form action="">
        <div className="input">
          <input type="text" placeholder={"Username"} />
        </div>
        <div className="input">
          <input type="password" placeholder={"New Password"} />
        </div>
        <div className="input">
          <input type="password" placeholder={"Confirm Password"} />
        </div>
        <div className="input">
          <input type="text" placeholder={"Affiliate ID / Referral"} />
        </div>
        <span
          className="btn-next"
          onClick={() => {
            setState({ ...state, active: 1 });
          }}
        >
          NEXT
        </span>
      </form>
      <div className="member-benefits">
        <span className="benefits-title">MEMBER BENEFITS</span>
        <ul>
          <li>- Welcome Bonus up to MYR 500</li>
          <li>- Up to 0.5% monthly cash rebate</li>
          <li>- 0.9% Unlimited Daily Cash Rebate</li>
          <li>- Fast deposit and withdrawal</li>
          <li>- Monthly special deposit bonus</li>
        </ul>
      </div>
    </div>
  );
  const step2 = () => (
    <div className="step2-box">
      <form action="">
        <div className="input">
          <input type="text" placeholder={"Email"} />
        </div>
        <div className="input">
          <select className="phone">
            <option value="">+06</option>
          </select>
          <input className="short" type="text" placeholder={"Contact Number"} />
        </div>
        <div className="input">
          <span className="item-title">Currency</span>
          <select className="currency">
            <option value="">MYR</option>
          </select>
        </div>
        <div className="input">
          <span className="item-title">Date of Birth</span>
          <input className="short" type="text" placeholder={"DD/MM/YYYY"} />
        </div>
        <span
          className="btn-next"
          onClick={() => {
            setState({ ...state, active: 2 });
          }}
        >
          REGISTER
        </span>
      </form>
      <div className="member-benefits">
        <span className="benefits-title">MEMBER BENEFITS</span>
        <ul>
          <li>- Welcome Bonus up to MYR 500</li>
          <li>- Up to 0.5% monthly cash rebate</li>
          <li>- 0.9% Unlimited Daily Cash Rebate</li>
          <li>- Fast deposit and withdrawal</li>
          <li>- Monthly special deposit bonus</li>
        </ul>
        <p className="text-p">
          By clicking the <span> REGISTER </span>
          button, I hereby acknowledge <br />
          that I am above 18 years old and have read and accepted <br />
          your <span>Terms & Conditions</span>
        </p>
      </div>
    </div>
  );
  const step3 = () => (
    <div className="step3-box">
      <i className="icon-logo2"></i>
      <div>
        <p>CONGRATULATION!</p>
        <p>Successfuly register as a member</p>
      </div>
      <span
        className="btn-next"
        onClick={() => {
          props.toDeposit
            ? props.toDeposit()
            : (window.location.href = "./member.html#/deposit");
        }}
      >
        DEPOSIT NOW
      </span>
      <p className="text-p">
        To start your betting experience right away, <br />
        we are redirecting you to Deposit Section, or you can click the <br />
        <span>DEPOSIT NOW </span>
        button if it is not redirecting.
      </p>
    </div>
  );

  return (
    <div className="register-panel">
      <div className="register-box">
        <div className="title">
          <span>{title}</span>
          <i
            className="icon-close3"
            onClick={() => {
              props.onClose && props.onClose();
            }}
          ></i>
        </div>
        <div className="content">
          <div className="steps">
            <ul>
              {state.list.map(({ value }, i) => (
                <li key={value}>
                  <span className={i <= state.active ? "on" : ""}>{value}</span>
                </li>
              ))}
            </ul>
            <div className="step-bg" data-index={state.active}></div>
          </div>
          <div className="step-content" data-index={state.active}>
            {state.list.map((item, i) => (
              <CSSTransition
                key={i}
                classNames="page"
                in={state.active === i}
                timeout={300}
                unmountOnExit
              >
                {i == 0 ? step1() : i == 1 ? step2() : step3()}
              </CSSTransition>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPanel;
