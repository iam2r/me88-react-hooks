import React, { FC } from "react";
import MainLayout from "root/layout/MainLayout";
import SlotBanner from "./SlotsBanner";
import SlotsGames from "./SlotsGames";

const Slots: FC = (props: any) => {
  return (
    <MainLayout>
     <SlotBanner/>
     <SlotsGames/>
    </MainLayout>
  );
};

export default Slots;
