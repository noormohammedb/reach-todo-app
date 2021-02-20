import React, { Component } from "react";
import "./App.css";
// import CustomForm from "./components/form";
// import List from "./components/list";
// import TryState from "./components/tryState";
import Todo from "./Todo";

class App extends Component {
   state = {
      fromState: "Hello World From React State",
      dTocomp: "Hello World From React Props ",
   };

   render() {
      return (
         <React.Fragment>
            {/* <div className="App">
               <h1 className="App-header">Hello World</h1>
               <p className="App-link">{this.state.fromState}</p>
            </div>
            <TryState dataToComponents={this.state.dTocomp} />
            <CustomForm />
            <List /> */}
            <Todo />
         </React.Fragment>
      );
   }
}

export default App;
