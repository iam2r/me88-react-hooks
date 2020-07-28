export interface State {
  isLogined: boolean;
  lan: string;
  view: { [key: string]: boolean };
}

const state: State = {
  isLogined: false,
  lan: "en_US",
  view: {
    sidemenu: false,
    register:false
  },
};

export default state;
