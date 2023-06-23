import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {originals,action, trending,comedy,horror,romance,documentaries} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowCards from "./Components/RowCards/RowCards";

function App() { 
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowCards url={originals} title='NetFlix Originals'/>
       <RowCards url={trending} title='Trending Now' isSmall />
      <RowCards url={action} title='Action' isSmall />
       <RowCards url={comedy} title='Comedy' isSmall />
       <RowCards url={horror} title='Horror' isSmall />
       <RowCards url={romance} title='Romance' isSmall />
       <RowCards url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
