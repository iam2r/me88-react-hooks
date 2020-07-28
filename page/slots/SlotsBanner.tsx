import React from "react";
import { TweenLite } from "gsap";
import state from "../wap/hooks/state";


export default class SlotsBanner extends React.Component{
  state: {amount: number};
  constructor(props: any){
      super(props);

      this.state = {
          amount: 1006795
      };
  }

  componentWillMount(){
    setInterval(this.runNumber.bind(this), 15000);
    this.runNumber();
  }

  runNumber(){
    let x = {n: 0};
    let nn = x.n;
    TweenLite.to(x, 10, {
        n: 100,
        onUpdate: () => {
            this.setState((state: any) => ({
                amount: state.amount + x.n - nn
            }));
            nn = x.n;
        }
    })
}

format(num: number){
    let strs = num.toFixed(2).split(".");
    let str = strs[0];

    let len = str.length;
    let n = Math.floor(len / 3);
    let nf = len % 3;

    let res = str.substr(0, nf);
    for(let i = 0; i < n; i++){
        res = res + "," + str.substr(nf + i * 3, 3);
    }
    res = res + "." + strs[1];
    res = nf > 0 ? res : res.substr(1);
    return res;
}

  render(){
    return (
      <div className="slots-banner">
        <div className="container">
          <div className="bottom-item">
            <div className="side">
              <span>Brothers kingdom</span>
              <span>MYR 50,385.79</span>
            </div>
            <div className="center">
                <span>PROGRESSIVE JACKPOT</span>
                <span>MYR {this.format(this.state.amount)}</span>
            </div>
            <div className="side">
              <span>Princess Wang</span>
              <span>MYR 90,000,00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}