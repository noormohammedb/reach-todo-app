import React, { Component } from "react";

class CustomForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         firstName: "",
         lastName: "",
      };

      this.inps1 = React.createRef();
      this.inps2 = React.createRef();
   }
   changeInpVal = (event) => {
      console.log(event.target.value);
      this.setState({
         [event.target.name]: event.target.value,
      });
   };

   onButtonAction = (event) => {
      event.preventDefault();
      // console.log(this.state.firstName);
      // console.log(this.state.lastName);
      console.log(this.inps1.value);
      console.log(this.inps2.value);
   };

   render() {
      return (
         <div>
            <h4>Form </h4>
            <form action="">
               <label htmlFor="firstName">First Name</label>
               <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  ref={(inputs) => (this.inps1 = inputs)}
                  // onChange={this.changeInpVal}
                  // value={this.state.firstName}
               />
               <label htmlFor="lastName">Last Name : </label>
               <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  ref={(inputs) => (this.inps2 = inputs)}
                  // onChange={this.changeInpVal}
                  // value={this.state.lastName}
               />
               <button onClick={this.onButtonAction}>click me</button>
            </form>
         </div>
      );
   }
}

export default CustomForm;
