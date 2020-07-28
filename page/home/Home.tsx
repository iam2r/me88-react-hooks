import React, { FC } from "react";
import MainLayout from "root/layout/MainLayout";
import Banner from "root/page/home/Banner";
import Sports from "root/page/home/Sports";
import SidePopup from "root/page/home/SidePopup";
import DroppingHot from "root/page/home/DroppingHot";
import Donotmiss from "root/page/home/Donotmiss";
import Ad from "root/page/home/Ad";
import Notice from "root/component/Notice";

const Home: FC = (props: any) => {
  return (
    <MainLayout>
      <Banner />
      <Notice />
      <Sports />
      <Ad />
      <DroppingHot />
      <Donotmiss />
      <SidePopup />
    </MainLayout>
  );
};

export default Home;
