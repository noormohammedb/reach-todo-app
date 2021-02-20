import React, { Component } from "react";

class List extends Component {
   state = {
      updated: 5,
      something: "some string",
      data: [
         {
            name: "name1",
            password: "password1",
         },
         {
            name: "name2",
            password: "password2",
         },
      ],
   };

   componentDidMount() {
      // alert("Hello");
      console.log("component List mount");
   }

   componentWillUnmount() {
      console.log("byy byy");
   }

   updateMethod = (event) => {
      this.setState({
         updated: 8,
      });
   };

   render() {
      console.log(this.state.updated);
      return (
         <React.Fragment>
            <h2> hello</h2>
            <div>
               <ul>
                  {this.state.data.map((data, index) => (
                     <li key={index}>
                        {data.name} - {data.password}
                     </li>
                  ))}
               </ul>
            </div>
            <button onClick={this.updateMethod}>Hit Me</button>
            <p>{this.state.something}</p>
         </React.Fragment>
      );
   }
}

export default List;
