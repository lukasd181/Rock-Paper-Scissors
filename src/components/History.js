import React from "react";

export default function History({ data }) {
//   const renderHistory = (historyArray) => {
//     let stringHistory = historyArray.reduce((total, item) => {
//       total += <div>${item}</div>;
//       return total;
//     }, "");
//     return stringHistory;
//   };

  return <div>{
    data.map((item) => 
    <div className="historyItem text-center">{item}</div>
  )}
    </div>;
}
