import React, { FC, useMemo, useState } from "react";

const Profile: FC = (props: any) => {
    return (
        <div className="profile-page">
            <div className="info-box">
                <ul>
                    <li>
                        <div className="key">
                            <span> Email</span>
                        </div>
                        <div className="value">
                            <span> ****seng@yaho.com</span>
                        </div>
                    </li>
                    <li>
                        <div className="key">
                            <span> Contact Number</span>
                        </div>
                        <div className="value">
                            <span> +*******9953</span>
                        </div>
                    </li>
                    <li>
                        <div className="key">
                            <span> Banking Details</span>
                        </div>
                        <div className="value">
                            <i className="icon-bank_mbb on"></i>
                            <div>
                                <span>157335027520</span>
                                <span>Tan Kit Seng</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="key">
                            <span> Username</span>
                        </div>
                        <div className="value">
                            <span>Kitseng</span>
                        </div>
                    </li>
                    <li>
                        <div className="key">
                            <span> Full Name</span>
                        </div>
                        <div className="value">
                            <span>Tan Kit Seng</span>
                        </div>
                    </li>
                    <li>
                        <div className="key">
                            <span>Date of Birth</span>
                        </div>
                        <div className="value">
                            <span>01/01/1988</span>
                        </div>
                    </li>
                    <li>
                        <div className="key">
                            <span>Currency</span>
                        </div>
                        <div className="value">
                            <span>MYR</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="form-box">
                <ul>
                    <li>
                        <div className="title">
                            Member ID
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder={'Member ID'}/>
                        </div>
                    </li>
                    <li>
                        <div className="title">
                            Email
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder={'Email'}/>
                        </div>
                    </li>
                    <li>
                        <div className="title">
                            Full Name
                        </div>
                        <div className="input-box">
                          <span>Full Name</span>
                        </div>
                    </li>
                    <li>
                        <div className="title">
                            Contact Number
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder={'Contact Number'}/>
                        </div>
                    </li>
                    <li>
                        <div className="title">
                            Username
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder={'Username'}/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Profile;
