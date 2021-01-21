/*
Ariel Ozary
*/
import React from "react";
import SortingVisualizer from "./Components/SortingVisualizer/SortingVisualizer";

import "./App.css";

function App() {
  console.log("hello there!! \nIm happy to see your aree checking console!");
  console.log("this is my beautiful Sorting Visualizator...");
  console.log("Currently opnly merge sort available.. stay tuned!");
  return (
    <div className="App">
      <h4>We love sorting</h4>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
