import React, { FC, useMemo } from "react";

export interface LoginProps {
  onClose?: Function;
  doLogin?: Function;
}
const Login: FC<LoginProps> = (props: LoginProps) => {
  const list = [
    { key: "whatsapp", value: "018 888 8888" },
    { key: "wechat", value: "ME88CS.Help" },
    { key: "skype", value: "ME88CS.Help" },
    { key: "download", value: "Download" },
  ];

  const close = () => {
    props.onClose && props.onClose();
  };

  return (
    <div
      className="login-page-box"
      onClick={() => {
        close();
      }}
    >
      <div
        className="login-popup"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <i
          className="icon-close2"
          onClick={() => {
            close();
          }}
        ></i>

        <i className="icon-logo2"></i>
        <form action="">
          <div className="input-item">
            <i className="icon-username"></i>
            <div className="input">
              <input placeholder={"Username"} type="text" />
            </div>
          </div>
          <div className="input-item">
            <i className="icon-lock"></i>
            <div className="input">
              <input placeholder={"Password"} type="password" />
            </div>
          </div>
          <div className="btn-item">
            <span>Forgot Password?</span>
            <span
              className="btn-login"
              onClick={() => {
                props.doLogin && props.doLogin();
              }}
            >
              LOGIN
            </span>
          </div>
        </form>
        <div className="msg-box">
          <p className="msg-tips">
            Do not have an account yet? Click <span onClick={()=>{window.location.href = './register.html'}}>here</span> to register now!
          </p>
          <div className="line"></div>
          <p className="msg-tips">
            If you encounter any issues while logging in, <br />
            please contact our
            <span> Customer Service</span> for further assistance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
