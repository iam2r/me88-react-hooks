import React, { FC, useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

export interface sliderItem {
  content: JSX.Element;
  tab?: JSX.Element;
}

export interface SliderProps {
  items: sliderItem[];
  dur?: number;
  timeout?: number;
  transionName?: string;
  allowPause?: boolean;
  autoPlay?: boolean;
  navigation?: JSX.Element;
  onChange?: (i: number) => void;
}

export interface State {
  index: number;
  direction: "next" | "prev";
}

const Slider: FC<SliderProps> = (props: SliderProps) => {
  const dur = props.dur || 6000;
  const timeout = props.timeout || 500;
  const allowPause = props.allowPause ?? true;
  const transionName = props.transionName || "fade";
  const autoPlay = props.autoPlay ?? true;
  const items = props.items;
  let timer: any = null;
  let initiated: boolean = false;
  const [state, setState] = useState<State>({ index: 0, direction: "next" });
  const elRef = useRef();
  const tick = () => {
    const onChange = props.onChange;
    next();
    onChange && onChange(state.index);
  };

  const start = () => {
    stop();
    autoPlay && (timer = setInterval(() => tick(), dur));
  };

  const stop = () => {
    autoPlay && clearInterval(timer);
  };

  const next = () => {
    const size = props.items.length;
    const index = state.index === size - 1 ? 0 : state.index + 1;
    slideTo(index, "next");
  };

  const prev = () => {
    const size = props.items.length;
    const index = state.index === 0 ? size - 1 : state.index - 1;
    slideTo(index, "prev");
  };

  const slideTo = (index: number, direction?: State["direction"]) => {
    if (index == state.index) return;
    start();
    direction = direction ?? (index > state.index ? "next" : "prev");
    setState({
      index,
      direction,
    });
    props.onChange && props.onChange(index);
  };

  const onStart = (e: any) => {
    if (initiated) return;
    let point = (e as TouchEvent).touches ? (e as TouchEvent).touches[0] : e;
    let target = elRef.current as any;
    target.pointX = (point as any).pageX;
    target.x = 0;
    target.startTime = +new Date();
    initiated = true;
  };

  const onMove = (e: any) => {
    if (!initiated) return;
    e.preventDefault();
    let point = (e as TouchEvent).touches ? (e as TouchEvent).touches[0] : e;
    let target = elRef.current as any;
    target.x += (point as any).pageX - target.pointX;
  };

  const onEnd = (e: any) => {
    if (!initiated) return;
    initiated = false;
    let target = elRef.current as any;
    target.endTime = +new Date();
    let distance = target.x,
      speed = distance / (target.endTime - target.startTime);
    if (Math.abs(distance) < 50) return;
    speed < 0 ? next() : prev();
  };

  useEffect(() => {
    start();
    return () => {
      stop();
    };
  });

  return (
    <div
      ref={elRef}
      className="slider"
      onTouchStart={onStart}
      onTouchMove={onMove}
      onTouchEnd={onEnd}
      onMouseDown={onStart}
      onMouseMove={onMove}
      onMouseUp={onEnd}
      onPointerOver={() => {
        allowPause && stop();
      }}
      onPointerOut={() => {
        allowPause && start();
      }}
    >
      <div className="slider-container">
        {items.map((node, index) => {
          return (
            <CSSTransition
              key={"item-" + index}
              classNames={transionName + "-" + state.direction}
              in={state.index === index}
              timeout={timeout}
              unmountOnExit
            >
              <div data-index={index}>{items[index].content}</div>
            </CSSTransition>
          );
        })}
      </div>

      {[
        <ul
          key="pagination"
          className={["pagination", items[0]?.tab ? "" : "default"].join(" ")}
        >
          {items.map((node, i) => (
            <li
              key={i}
              onClick={() => slideTo(i)}
              className={state.index === i ? "on" : ""}
            >
              {items[i].tab}
            </li>
          ))}
        </ul>,
        <ul key="navigation" className="navigation">
          <li
            key="prev"
            onClick={() => {
              prev();
            }}
          >
            {props.navigation}
          </li>
          <li
            key="next"
            onClick={() => {
              next();
            }}
          >
            {props.navigation}
          </li>
        </ul>,
      ]}
    </div>
  );
};

export default Slider;
