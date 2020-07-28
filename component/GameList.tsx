import React, { FC, useState, useEffect } from "react";
export interface GameListProps {
  list: {
    key: string;
    name: string;
    love: boolean;
  }[];
}
const GameList: FC<GameListProps> = (props: GameListProps) => {
  const [state, setState] = useState({
    list: props.list,
  });

  const toggleLove = (index: number, status?: boolean) => {
    status = status ?? !state.list[index].love;
    const list = state.list;
    list[index].love = status;
    setState({ ...state, list });
  };

  return (
    <ul className="game-content">
      {state.list.map(({ name, love, key }, i) => (
        <li key={key} className="force-hover">
          <div className={["img-box", "icon-game-" + key].join(" ")}>
            <div className="hover-box">
              <span>Play Now</span>
              <span>Demo</span>
            </div>
          </div>
          <p>
            <span>{name}</span>
            <i
              className={[love ? "icon-love-on" : "icon-love-off"].join(" ")}
              onClick={() => {
                toggleLove(i);
              }}
            ></i>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default GameList;
