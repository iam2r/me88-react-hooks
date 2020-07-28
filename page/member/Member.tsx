import React, { FC } from "react";
import MainLayout from "root/layout/MainLayout";
import MemberPanel from "./MemberPanel"

const Member: FC = (props: any) => {
  return (
    <MainLayout>
     <MemberPanel/>
    </MainLayout>
  );
};

export default Member;
