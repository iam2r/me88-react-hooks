import React from "react";

export default class Clock extends React.Component{
    timer: any;
    state: {date: Date};
    constructor(props: any){
        super(props);

        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    tick(){
        this.setState({date: new Date()});
    }

    getDateStr(date: Date, fmt: string = 'yyyy-MM-dd') {
        var o: any = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }

    render(){
        return (
            <span  className="date-time">GMT+8&nbsp;&nbsp;{this.getDateStr(this.state.date, "dd / MM / yyyy  hh:mm:ss")}</span>
        );
    }
}