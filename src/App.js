import React from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";

function App() {
  return (
    <div className="container">
      <InputBox />
      <PhoneList />
    </div>
  );
}

export default App;
