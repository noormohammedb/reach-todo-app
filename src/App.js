import { Component } from "react";
import "./App.css";
import Todo from "./components/todo";

class App extends Component {
   state = {
      fromState: "Hello World From React State",
      dTocomp: "Hello World From React Props ",
   };

   render() {
      return (
         <div className="App">
            <h1 className="App-header">Hello World</h1>
            <p className="App-link">{this.state.fromState}</p>
            <Todo dataToComponents={this.state.dTocomp} />
         </div>
      );
   }
}

export default App;
