import React, { FC, useMemo, useState } from "react";

const ChangePwd: FC = (props: any) => {
  return (
    <div className="changepwd-page">
      <div className="group-item input-item">
        <div className="title">
          <span>Current Password</span>
          <span>*</span>
        </div>
        <div className="group">
          <div className="input-box">
            <input type="text" placeholder="Current Password" />
          </div>
        </div>
      </div>
      <div className="group-item input-item">
        <div className="title">
          <span>New Password</span>
          <span>*</span>
        </div>
        <div className="group">
          <div className="input-box">
            <input type="password" placeholder="New Password" />
          </div>
        </div>
      </div>
      <div className="group-item input-item">
        <div className="title">
          <span>Confirm Password</span>
          <span>*</span>
        </div>
        <div className="group">
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
      </div>
      <span className="btn-submit">SUBMIT</span>
    </div>
  );
};

export default ChangePwd;
