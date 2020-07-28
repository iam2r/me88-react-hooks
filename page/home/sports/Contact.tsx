import React, { FC, useMemo } from "react";

const Contact: FC = (props: any) => {
   

    return (
        <div className="contact-box">
            <ul className="contact-list">
                <li>
                    <i></i>
                    <div>
                        <span>Whatsapp</span>
                        <span>018 888 8888</span>
                    </div>
                </li>
                <li>
                    <i></i>
                    <div>
                        <span>Wechat</span>
                        <span>ME88CS.Help</span>
                    </div>
                </li>
                <li>
                    <i></i>
                    <div>
                        <span>Skype</span>
                        <span>ME88CS.Help</span>
                    </div>
                </li>
                <li>
                    <i></i>
                    <div>
                        <span>Live Chat</span>
                        <span>CLICK HERE</span>
                    </div>
                </li>
            </ul>
            <ul className="download-list">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export default Contact;
