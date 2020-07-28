import React, { FC, useMemo } from "react";
import Notice from "root/component/Notice";
import MemberCom from "./MemberCom";
const MemberPanel: FC = (props: any) => {
    return (
        <div className="member-panel">
           <Notice/>
           <div className="container">
             <MemberCom/>
           </div>
        </div>
    );
};

export default MemberPanel;
