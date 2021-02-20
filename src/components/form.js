import React, { Component } from "react";

class CustomForm extends Component {
   state = {
      firstName: "",
      lastName: "",
   };
   changeInpVal = (event) => {
      // console.log(event.target.value);
      this.setState({
         [event.target.name]: event.target.value,
      });
   };

   onButtonAction = (event) => {
      event.preventDefault();
      console.log(this.state.firstName);
      console.log(this.state.lastName);
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
                  onChange={this.changeInpVal}
                  value={this.state.firstName}
               />
               <label htmlFor="lastName">Last Name : </label>
               <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={this.changeInpVal}
                  value={this.state.lastName}
               />
               <button onClick={this.onButtonAction}>click me</button>
            </form>
         </div>
      );
   }
}

export default CustomForm;
