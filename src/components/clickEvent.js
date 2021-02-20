import React, { Component } from "react";

class ClickEvent extends Component {
   state = {
      clickData: 4,
   };
   increment = () => {
      console.log("clicked increment");
      this.setState({
         clickData: this.state.clickData + 1,
      });
   };

   decrement = () => {
      console.log("clicked decrement");
      this.setState({
         clickData: this.state.clickData - 1,
      });
   };

   render() {
      return (
         <div>
            <h3>click event</h3>
            <p>{this.state.clickData}</p>
            <button className="envet" onClick={this.increment}>
               +
            </button>
            <p></p>
            <button className="envet" onClick={this.decrement}>
               -
            </button>
         </div>
      );
   }
}

export default ClickEvent;
