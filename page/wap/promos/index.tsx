import React, { useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useStore } from "root/page/wap/hooks";
import WapLayout from "root/layout/WapLayout";

import Acctbar from "root/component/wap/Acctbar";
import WebPromos from "root/page/promos/PromosPanel";

import "root/style/promos.scss";

export default function Download(props: any) {
  return (
    <WapLayout>
      <div className="promos-page">
        <Acctbar />
        <div className="promos-box-container">
          <WebPromos/>
        </div>
      </div>
    </WapLayout>
  );
}
