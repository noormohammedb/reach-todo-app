import React, { Component } from "react";

class List extends Component {
   state = {
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
      console.log("component List");
   }

   render() {
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
            <p>{this.state.something}</p>
         </React.Fragment>
      );
   }
}

export default List;
