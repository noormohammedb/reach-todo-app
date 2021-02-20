import { Component } from "react";
import "./App.css";
import Todo from "./components/todo";

class App extends Component {
   state = {
      fromState: "Hello World From React State",
   };

   render() {
      return (
         <div className="App">
            <h1 className="App-header">Hello World</h1>
            <p className="App-link">{this.state.fromState}</p>
            <Todo />
         </div>
      );
   }
}

export default App;
