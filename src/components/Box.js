import React from "react";

export default function Box({ num, value, winner, title, item, imgURL }) {
  return (
    <div>
      <div className={`box-style-${winner}`}>
        <h1>{title}</h1>
        <img src={imgURL} alt={title} width="200" />
        <h3>{item}</h3>
        <h2>{`${winner}`}</h2>
        
      </div>
    </div>
  );
}

// import React, { Component } from "react";

// export default class Box extends Component {

//   render() {
//     return (
//       <div>
//         <div className={`box-style-${this.props.winner ? 'winner' : 'loser'}`}>
//           <h1>{this.props.title}</h1>
//           <img src={this.props.imgURL} alt={this.props.title} width="200"/>
//           <h3>{this.props.item}</h3>
//           <h2>{`${this.props.winner ? 'winner' : 'loser'}`}</h2>
//         </div>
//       </div>
//     );
//   }
// }
