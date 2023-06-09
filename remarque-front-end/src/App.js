import './App.css';
import React from "react";
import { MyFirstGrid, Planner} from "./components";

function App() {
  return (
    <div className="App">
      <div className="w-full grid grid-cols-2 grid-flow-row text-left">
      <Planner />
      <MyFirstGrid />
      </div>
    </div>
  );
}

export default App;
