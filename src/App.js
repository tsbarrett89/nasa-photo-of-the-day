import React from "react";
import "./App.css";
import PhotoGrid from './components/PhotoGrid';

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <h1>Nasa Photo of the Day</h1>
      <PhotoGrid />
    </div>
  );
}

export default App;
