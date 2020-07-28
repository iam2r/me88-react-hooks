import React, { FC, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";


const Notice: FC = (props: any) => {
    const [state, setState] = useState<{ in: boolean }>({ in: false });

    useEffect(() => {
        setState({ in: true })
    }, [])

    const toggleIn = () => {
        setState({ in: !state.in })
    }
    return (
        <div className="notice">
            <div className="container">
                <div className="content">
                    <CSSTransition in={state.in} classNames="msg" timeout={20000}
                        onEntered={() => toggleIn()}
                        onExited={() => toggleIn()}
                    >
                        <span>
                            APP! (Android & IOS) Visit now to experience this innovative game play! Android: https://rr-dl.gp2play.info/mob/racing_reel_tps://rr-dl.gp2play.info/mob/racing_reel_ App
                </span>
                    </CSSTransition>
                </div>
            </div>

        </div>
    );
}

export default Notice