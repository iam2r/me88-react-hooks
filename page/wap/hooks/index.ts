import { useReducer, useContext, createContext } from "react";
import defaultState, { State } from "./state";

interface Store {
  state: State;
  dispatch: any;
}

const AppContext = createContext({
  state: defaultState,
  dispatch: () => {},
});
const Provider = AppContext.Provider;

const useStore = (): Store => useContext(AppContext);

const updateObject = (
  obj: { [key: string]: any },
  ...objArr: { [key: string]: any }[]
) => {
  if (!objArr) return;

  objArr.forEach((ob) => {
    for (let k in ob) {
      if (obj[k] instanceof Array) {
        obj[k] = ob[k];
      } else if (typeof obj[k] === "object") {
        updateObject(obj[k], ob[k]);
      } else {
        obj[k] = ob[k];
      }
    }
  });
};

const useCreateStore = (): Store => {
  const [state, dispatch] = useReducer(
    (state = defaultState, obj: { [key: string]: any }) => {
      let stateStore = JSON.parse(JSON.stringify(state));
      updateObject(stateStore, obj);  
      return { ...stateStore };
    },
    defaultState
  );
  return {
    state,
    dispatch,
  };
};

export { Provider, useStore, useCreateStore };
