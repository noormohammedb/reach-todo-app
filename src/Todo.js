import React, { Component } from "react";

class Todo extends Component {
   render() {
      return (
         <React.Fragment>
            <h1>ToDo App</h1>
            <div>
               <form>
                  <input type="text" name="todo-box" id="todo-box" />
                  <button>Add</button>
               </form>
               <div className="todo-containe">
                  <ul className="todo-list">
                     <li className="ch-to">
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
                     </li>
                  </ul>
               </div>
            </div>
         </React.Fragment>
      );
   }
}
export default Todo;
