import React, { FC } from "react";

const Donotmiss: FC = (props: any) => {
  const list = [
    {
      title: "LIVE CASINO",
      content: (
        <div>
          <p>
            Supply 37 Table Poker, Roulette,
            <br /> and Dice etc. One Years 365 Days,
          </p>
          <p>
            {" "}
            One Day 24 Hours, Beauty Dealer <br /> Accompany With Your.
          </p>
        </div>
      ),
    },
    {
      title: "SLOTS",
      content: (
        <div>
          <p>
            Over 200 Slots Game with Table <br /> Games. <br /> Average Dividen
            Over 95%
          </p>
          <p>Come & Win!</p>
        </div>
      ),
    },
    {
      title: "FISHING",
      content: (
        <div>
          <p>
            Fish and Hunt with New Modes <br />
            and Special Effect!
          </p>
          <p>
            Extra Jackpot Added.Made Your
            <br />
            Huting More Intense and <br />
            Exciting!
          </p>
        </div>
      ),
    },
    {
      title: "POKER",
      content: (
        <div>
          <p>
            The Only Mobile Poker Apps <br />
            That Lets You Play with One Hand.
          </p>
          <p>Available on Android & IOS</p>
        </div>
      ),
    },
  ];
  return (
    <div className="donot-miss">
      <div className="container">
        <span className="item-title">DON'T MISS IT</span>
        <div className="more-games" data-screen="mobile">
          <span>MORE</span>
          <span> {'>'} </span>
        </div>
        <ul className="donot-miss-list">
          {list.map(({ title, content }) => (
            <li key={title}>
              <span className="title">{title}</span>
              <div className="content">{content}</div>
              <div className="hover-box"></div>
              <div className="bottom-box">
                <div className="bottom">
                  <span>Play Now</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Donotmiss;
