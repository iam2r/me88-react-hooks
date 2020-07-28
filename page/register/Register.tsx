import React, { FC } from "react";
import MainLayout from "root/layout/MainLayout";
import RegisterPanel from "./RegisterPanel"

const Register: FC = (props: any) => {
  return (
    <MainLayout>
      <RegisterPanel onClose={()=>{window.location.href = './index.html'}}/>
    </MainLayout>
  );
};

export default Register;
