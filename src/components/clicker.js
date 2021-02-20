import React, { Component } from "react";

class Clicker extends Component {
   state = {
      changeProps: this.props.count,
   };

   changeProsFun = () => {
      this.setState({
         changeProps: this.props.count + 1,
      });
   };

   render() {
      return (
         <div>
            <p>Hello form clickger</p>
            <p className="count">{this.props.count}</p>
            <p className="clolor">{this.state.changeProps}</p>
            <button className="propsfun" onClick={this.changeProsFun}>
               ch props
            </button>
         </div>
      );
   }
}
export default Clicker;
