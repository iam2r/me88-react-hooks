import React, { useEffect, useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useStore } from "root/page/wap/hooks";
import WapLayout from "root/layout/WapLayout";

import Acctbar from "root/component/wap/Acctbar";
import WebDownLoad from "root/page/download/DownloadPanel";
import "root/style/download.scss";

export default function Download(props: any) {
  return (
    <WapLayout>
      <div className="download-page">
        <Acctbar />
        <WebDownLoad />
      </div>
    </WapLayout>
  );
}
