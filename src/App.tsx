import { useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import Nav from "./components/Nav";

function App() {
  const [currentStep, setCurrentStep] = useState();
  return (
    <>
      <div className="app">
        <Nav onSelectStep={() => setCurrentStep} />
        <MainContainer />
      </div>
    </>
  );
}

export default App;
