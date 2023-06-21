//1.----------------------------------------------------------------------------------
//
// import React from 'react';
// import ReactDOM from 'react-dom';

// import App from './App';

// ReactDOM.render(
//   <App />,document.getElementById("root")
// );


//2.

import React from "react";
import  ReactDOM from "react-dom";
import Seriescard from "./Seriescard";
import Cardarray from "./Cardarray";



ReactDOM.render(
  <>
  <h1 className="heading">List Of Top Netflix Series</h1>
 {/* phle yeh use karte the lekin or easy or simple code ke liye use array map function */}
    {/* <Seriescard 
      imgsrc={Cardarra.imgsrc}
      category={Cardarray[1].category}
      title={Cardarray[2].title}
      link={Cardarray[3].link} 
    /> */}
    {/* map function -------------------------------------------------- */}
    {Cardarray.map(
      function ncard(val){
      return(
              <Seriescard 
                 imgsrc={val.imgsrc}
                   category={val.category}
                   title={val.title}
                   link={val.link} 
               />

            );

         }
      )
    }
 
  </>
  ,document.getElementById("root")
);