import React, { FC } from "react";
import MainLayout from "root/layout/MainLayout";
import PromosPanel from "./PromosPanel";

const Promos: FC = (props: any) => {
  return (
    <MainLayout>
     <PromosPanel/>
    </MainLayout>
  );
};

export default Promos;
