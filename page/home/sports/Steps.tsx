import React, { FC, useMemo } from "react";

const Steps: FC = (props: any) => {
    const steps = useMemo(() =>
        [
            {
                key: '1',
                content: <span>CREATE<br />YOUR ACCOUNT</span>
            },
            {
                key: '2',
                content: <span>MAKE<br />A DEPOSIT</span>
            },
            {
                key: '3',
                content: <span>START<br />WINNING</span>
            }
        ]
        , [])

    return (
        <div className="step-box">
            <div className="container">
                <ul>
                    {
                        steps.map(({ key, content }) =>
                            <li key={key}>
                                <i className={"icon-step-" + key}></i>
                                <div>
                                    <span>STEP {key} <b>  &nbsp;></b></span>
                                    {content}
                                </div>

                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Steps;
