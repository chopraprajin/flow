import React from "react";
import { secondsToDhms } from "../utils";

function Table({ data }) {
  return (
    <>
      <div className="grid grid-cols-4 text-gradient text-xl">
        <h1>Name</h1>
        <h1>Time Period</h1>
        <h1>Amount</h1>
        <h1>Subscribed</h1>
      </div>
      <div className="">
        {data.map((row) => (
          <ul className="text-slate-200  grid grid-cols-4 text-lg">
            <li className="ml-1">{row.name}</li>
            <li className="ml-1">{secondsToDhms(row.period)}</li>
            <li className="ml-1">{row.amount}</li>
            <li className="ml-1">
              {row.subscribed ? "Subscribed" : "Not Subscribed"}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Table;
