import { useState } from "react";
import team from "./Data/team.js";
import Team from "./Components/Team/Team.jsx";
import "./App.scss";
import AddJob from "./Components/AddJob/AddJob.jsx";


const  App = () => {


  return (
    <div className="App">
      <h1>Tick track your team!</h1>
        <Team team={team} />
    </div>
  );
}

export default App;
