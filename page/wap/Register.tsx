import React, { FC, useState, useMemo } from "react";
import WapLayout from "root/layout/WapLayout";
import WebRegister from "root/page/register/RegisterPanel";
import "root/style/register.scss";
import { useStore } from "./hooks";
import { useHistory } from "react-router-dom";
export default function Register<FC>(props: any) {
  const { state: globaState, dispatch } = useStore();
  const history = useHistory()
  return (
    <div className="mobile-register">
      <WapLayout>
        <WebRegister
          onClose={() => {
            dispatch({ view: { register: false } });
          }}
          toDeposit={()=>{
            history.push("/funds/deposit");
            dispatch({ view: { register: false } });
          }}
        />
      </WapLayout>
    </div>
  );
}
