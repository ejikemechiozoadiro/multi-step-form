import { useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import Nav from "./components/Nav";

function App() {
  const [currentStep, setCurrentStep] = useState<number>();

  return (
    <>
      <div className="app">
        <Nav onSelectStep={(step) => setCurrentStep(step)} />
        <MainContainer currentStep={currentStep} />
      </div>
    </>
  );
}

export default App;
