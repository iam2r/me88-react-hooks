import React, { FC, useState, useEffect, useRef } from "react";

export interface sliderItem {
  content: JSX.Element;
  tab?: JSX.Element;
}

export interface SliderProps {
  defaultIndex?: number;
  items: sliderItem[];
  dur?: number;
  timeout?: number;
  allowPause?: boolean;
  autoPlay?: boolean;
  space?: string;
  activedIndex?: number; //激活的排在第几个
  onChange?: (i: number) => void;
}

export interface State {
  index: number;
  cssList: string[];
}

const Slider: FC<SliderProps> = (props: SliderProps) => {
  const dur = props.dur || 6000;
  const allowPause = props.allowPause ?? true;
  const autoPlay = props.autoPlay ?? false;
  const items = props.items;
  const space = props.space ?? "";
  const activedIndex = props.activedIndex ?? Math.floor(props.items.length / 2);
  const defaultIndex = props.defaultIndex ?? 0;
  let timer: any = null;
  let initiated: boolean = false;
  const [state, setState] = useState<State>({
    index: defaultIndex,
    cssList: [],
  });
  const elRef = useRef();
  const tick = () => {
    const onChange = props.onChange;
    next();
    onChange && onChange(state.index);
  };

  const prev = () => {
    const size = props.items.length;
    const index = state.index === 0 ? size - 1 : state.index - 1;
    slideTo(index);
  };

  const next = () => {
    const size = props.items.length;
    const index = state.index === size - 1 ? 0 : state.index + 1;
    slideTo(index);
  };

  const start = () => {
    stop();
    autoPlay && (timer = setInterval(() => tick(), dur));
  };

  const stop = () => {
    autoPlay && clearInterval(timer);
  };

  const slideTo = (index: number) => {
    if (index == state.index) return;
    start();
    setState((state) => ({
      ...state,
      index,
    }));
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
    e._stopClick = true;
  };

  const clickSlider = (e: any, index: number) => {
    if(e._stopClick) return delete e._stopClick;
    if (index == state.index) {
      console.log('click')
    } else {
      slideTo(index);
    }
  };

  const createList = (startIndex: number, l: number) => {
    let start = startIndex,
      realListIndex = activedIndex,
      len = l;
    let realList = [];

    realList[activedIndex] = startIndex;

    for (let index = 0; index < len; index++) {
      realListIndex++;
      start++;
      realListIndex = realListIndex == len ? 0 : realListIndex;
      start = start == len ? 0 : start;
      realList[realListIndex] = start;
    }

    return realList;
  };

  const createStyle: any = () => {
    let cssList = [];
    let centerIndex = Math.floor(props.items.length / 2);
    for (let index = 0; index < props.items.length; index++) {
      const diff = index - activedIndex;
      const zIndex = -Math.abs(diff);
      const translateX = diff * 100 - 50;
      const util = space ? space.replace(parseFloat(space) + "", "") : "";
      const spacel = space ? diff * parseFloat(space) + util : 0;
      cssList.push({
        position: `absolute`,
        top: `50%`,
        left: `50%`,
        transform: `translate(${translateX}%, -50%) translateX(${spacel})`,
        zIndex,
      });
    }
    return cssList;
  };

  const calcStyle = (i: number) => {
    let list = createList(state.index, props.items.length);
    let cssList = createStyle();
    let cssIndex = list.findIndex((it) => it == i);
    return cssList[cssIndex];
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
            <div
              key={"item-" + index}
              data-index={index}
              style={calcStyle(index)}
              onClick={(e: any) => clickSlider(e, index)}
              data-active={index == state.index}
            >
              {items[index].content}
            </div>
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
      ]}
    </div>
  );
};

export default Slider;
