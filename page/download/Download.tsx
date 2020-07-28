import React, { FC } from "react";
import MainLayout from "root/layout/MainLayout";
import DownloadPanel from "./DownloadPanel";

const Register: FC = (props: any) => {
  return (
    <MainLayout>
      <DownloadPanel/>
    </MainLayout>
  );
};

export default Register;
