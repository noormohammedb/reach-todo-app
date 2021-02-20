import React, { Component } from "react";

class Todo extends Component {
   render() {
      return (
         <div className="ele">
            <h4>Hello from todo component</h4>
            <p className="props">{this.props.dataToComponents}</p>
            <p>after props</p>
         </div>
      );
   }
}

export default Todo;
