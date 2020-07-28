import React, { FC, useMemo, useState, useEffect } from "react";
import FlipMove from "react-flip-move";
const Bank: FC = (props: any) => {
  const [state, setState] = useState({
    list: [],
    preferred: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setState({
        ...state,
        list: [
          {
            bank: "bank_mbb",
            key: "0",
            name: "MBB",
            branch: "",
            holder: "KitSeng",
            number: "*********8888",
          },
          {
            bank: "bank_mbb",
            key: "1",
            name: "MBB",
            branch: "",
            holder: "KitSeng",
            number: "*********8888",
          },
          {
            bank: "bank_mbb",
            key: "2",
            name: "MBB",
            branch: "",
            holder: "KitSeng",
            number: "*********8888",
          },
        ],
      });
    });
  }, []);

  const addBank = () => {
    if (state.list.length >= 5) return;

    const newKey = +new Date();

    const item = {
      bank: "bank_mbb",
      key: newKey + "",
      name: "MBB",
      branch: String(+new Date()),
      holder: "KitSeng",
      number: "*********8888",
    };
    setState((state) => ({ ...state, list: [...state.list, item] }));
  };

  const deleteBank = (i: number) => {
    const list = state.list;
    list.splice(i, 1);
    setState({ ...state, list });
  };
  return (
    <div className="bank-page">
      <div className="bank-account-list">
        <div className="table-header">
          <ul>
            <li>Bank</li>
            <li>Bank Branch</li>
            <li>Account Holder</li>
            <li>Account Number</li>
            <li></li>
          </ul>
        </div>
        <FlipMove
          className="table-list"
          enterAnimation="fade"
          leaveAnimation="fade"
        >
          {state.list.map(({ key, bank, name, holder, number, branch }, i) => (
            <ul key={key}>
              <li>
                <span className="icon-box">
                  <i className={"on icon-" + bank}></i>
                </span>
                <span>{name}</span>
              </li>
              <li>
                <span>{branch}</span>
              </li>
              <li>
                <span>{holder}</span>
              </li>
              <li>
                <span>{number}</span>
              </li>
              <li>
                <i
                  className="icon-delete"
                  onClick={() => {
                    deleteBank(i);
                  }}
                ></i>
                <i className="icon-edit"></i>
              </li>
            </ul>
          ))}
        </FlipMove>
        <FlipMove
          className="tip-box"
          enterAnimation="fade"
          leaveAnimation="fade"
        >
          {state.list.length < 5 && (
            <span>
              You can add {state.list.length != 5 ? 5 - state.list.length : 1}
              &nbsp; more bank accounts.
            </span>
          )}
        </FlipMove>
      </div>

      <div className="bank-add">
        <div className="add-title">ADD BANK ACCOUNT</div>
        <div className="group-item input-item">
          <div className="title">
            <span>Bank</span>
            <span>*</span>
          </div>
          <div className="group">
            <div className="input-box">
              <select name="" id="">
                <option>--- Please Select ---</option>
              </select>
            </div>
          </div>
        </div>
        <div className="group-item input-item">
          <div className="title">
            <span>Branch</span>
            <span>*</span>
          </div>
          <div className="group">
            <div className="input-box">
              <input type="text" placeholder="Branch" />
            </div>
          </div>
        </div>
        <div className="group-item input-item">
          <div className="title">
            <span>Account Name</span>
            <span> </span>
          </div>
          <div className="group">
            <span>KitSeng</span>
          </div>
        </div>
        <div className="group-item input-item">
          <div className="title">
            <span>Account Number</span>
            <span>*</span>
          </div>
          <div className="group">
            <div className="input-box">
              <input type="text" placeholder="Your Account Number" />
            </div>
            <div className="check-box">
              <i
                className={["checkbox", state.preferred ? "on" : ""].join(" ")}
                onClick={() => {
                  setState({ ...state, preferred: !state.preferred });
                }}
              ></i>
              <span
                onClick={() => {
                  setState({ ...state, preferred: !state.preferred });
                }}
              >
                Set as Preferred
              </span>
            </div>
          </div>
        </div>

        <span
          className="btn-submit"
          onClick={() => {
            addBank();
          }}
        >
          ADD
        </span>
      </div>
    </div>
  );
};

export default Bank;
