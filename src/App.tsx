import React from "react";

import Header from "./components/Header";
import Flights from "./components/Flights/Flights";
import { Root } from "./styles";

import "./App.css";

function App() {
  return (
    <Root>
      <Header />
      <Flights />
    </Root>
  );
}

export default App;
