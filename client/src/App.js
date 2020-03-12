// Import React dependencies.
import React, { useMemo, useState } from "react";
import './App.css';
import Header from './Components/Layout/Header'


function App() {
  // Create a Slate editor object that won't change across renders.

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
