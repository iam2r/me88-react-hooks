import React, { FC } from "react";
import MainLayout from "root/layout/MainLayout";
import CasinoPanel from "./CasinoPanel";

const Casino: FC = (props: any) => {
  return (
    <MainLayout>
     <CasinoPanel/>
    </MainLayout>
  );
};

export default Casino;
