import React, { FC, useMemo } from "react";

const Language: FC = (props: any) => {
    return (
        <div className="language-list-popup">
             <ul>
              <li>
                <i className="icon-ms_MS"></i>
                <span className="on">English</span>
                <span className="divide"></span>
                <span>简体中文</span>
                <span className="divide"></span>
                <span>Bhs Malayu</span>
              </li>
              <li>
                <i className="icon-th_TH"></i>
                <span>English</span>
                <span className="divide"></span>
                <span>ไทย</span>
              </li>
              <li>
                <i className="icon-id_ID"></i>
                <span>English</span>
                <span className="divide"></span>
                <span>Bhs  Indonesia</span>
              </li>
            </ul>
        </div>
    );
};

export default Language;
