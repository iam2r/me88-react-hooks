import React, { FC, useMemo } from "react";
import Steps from './sports/Steps';
import Contact from './sports/Contact';
import SportsGames from './sports/SportsGames';
import UPEvents from './sports/UPEvents';
const Sports: FC = (props: any) => {
    return (
        <div className="sports">
            <Steps />
            <div className="container">
                <div className="group">
                    <SportsGames />
                    <UPEvents />
                </div>
                <Contact />
            </div>
        </div>
    );
};

export default Sports;
