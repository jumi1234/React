import React from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";

const App = () => {
  return(
    <div className="container">
      <InputBox />
      <PhoneList />
    </div>
  )
}

export default App;
