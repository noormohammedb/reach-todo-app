import React, { Component } from "react";

class Todo extends Component {
   state = {
      clickCount: 0,
   };

   clickEventInButton = () => {
      this.setState({
         clickCount: this.state.clickCount + 1,
      });
   };
   render() {
      return (
         <div className="ele">
            <h4>Hello from todo component</h4>
            <p className="props">{this.props.dataToComponents}</p>
            <button onClick={this.clickEventInButton}>Click Me</button>

            <p> {this.state.clickCount}</p>
         </div>
      );
   }
}

export default Todo;
