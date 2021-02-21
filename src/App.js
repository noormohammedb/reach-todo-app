import React, { Component } from "react";
import "./App.css";
// import CustomForm from "./components/form";
// import List from "./components/list";
// import TryState from "./components/tryState";
import Todo from "./Todo";
import About from "./components/router/about";
import Header from "./components/router/header";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
   state = {
      fromState: "Hello World From React State",
      dTocomp: "Hello World From React Props ",
   };

   render() {
      return (
         <>
            {/* <div className="App">
               <h1 className="App-header">Hello World</h1>
               <p className="App-link">{this.state.fromState}</p>
            </div>
            <TryState dataToComponents={this.state.dTocomp} />
            <CustomForm />
            <About />
            <Header />
            <Todo />
            <List /> */}
            <Router>
               <Header />
               <Route path="/" exact component={Todo} />
               <Route path="/about" component={About} />
            </Router>
         </>
      );
   }
}

export default App;
