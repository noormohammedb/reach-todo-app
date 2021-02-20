import React, { Component } from "react";

class Todo extends Component {
   state = {
      todoData: [],
   };

   removeEvent = (possition) => {
      console.log("event clicked");
      console.log(possition);
      this.setState({
         todoData: this.state.todoData.filter(
            (data, index) => index !== possition
         ),
      });
   };

   addEvent = (event) => {
      event.preventDefault();
      console.log(event.target.previousSibling.value);
      this.setState({
         todoData: [...this.state.todoData, event.target.previousSibling.value],
      });
      event.target.previousSibling.value = "";
   };

   lookArray = (event) => {
      console.log(this.state);
   };

   render() {
      return (
         <React.Fragment>
            <h1>ToDo App</h1>
            <div>
               <form>
                  <input type="text" name="todo-box" id="todo-box" />
                  <button type="submit" onClick={this.addEvent}>
                     Add
                  </button>
               </form>
               <div className="todo-containe">
                  <ul className="todo-list">
                     {/* <li className="ch-to">
                        <p className="todo-content">{}blabal</p>
                        <img
                           src="https://www.flaticon.com/premium-icon/icons/svg/2920/2920658.svg"
                           alt=""
                           className="cross-icon"
                        />
                     </li>
                     <li className="ch-to">
                        <p className="todo-content">{}blabal</p>
                        <img
                           src="https://www.flaticon.com/premium-icon/icons/svg/2920/2920658.svg"
                           alt=""
                           className="cross-icon"
                        />
                     </li> */}
                     {this.state.todoData.map((data, index) => (
                        <li key={index} className="ch-to">
                           <p className="todo-content">{data}</p>
                           <img
                              src="https://www.flaticon.com/premium-icon/icons/svg/2920/2920658.svg"
                              alt=""
                              className="cross-icon"
                              onClick={() => {
                                 this.removeEvent(index);
                              }}
                           />
                        </li>
                     ))}
                  </ul>
               </div>
               <button onClick={this.lookArray}>check state</button>
            </div>
         </React.Fragment>
      );
   }
}
export default Todo;
