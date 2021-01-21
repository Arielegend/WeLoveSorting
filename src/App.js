/*
Ariel Ozary
*/
import React from "react";
import SortingVisualizer from "./Components/SortingVisualizer/SortingVisualizer";

import "./App.css";

function App() {
  console.log("Hello there!! \nIm happy to see you are checking console!");
  console.log("This is my beautiful Sorting Visualizator...");
  console.log("Currently only merge sort available.. stay tuned!");
  return (
    <div className="App">
      <h4>We love sorting</h4>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
