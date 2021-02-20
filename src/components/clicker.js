import React, { Component } from "react";

class Clicker extends Component {
   render() {
      return (
         <div>
            <p>Hello form clickger</p>
            <p className="count">{this.props.count}</p>
         </div>
      );
   }
}
export default Clicker;
