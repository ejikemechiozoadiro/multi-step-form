import { useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";
import Nav from "./components/Nav";

function App() {
  const [currentStep, setCurrentStep] = useState<number | undefined>(1);
  console.log(currentStep);

  return (
    <>
      <div className="app">
        <Nav
          onSelectStep={(step) => setCurrentStep(step)}
          currentStep={currentStep}
        />
        <MainContainer
          onValidNext={(valid) =>
            setCurrentStep(valid && currentStep ? currentStep + 1 : currentStep)
          }
          onPrevious={(previous) =>
            setCurrentStep(
              previous && currentStep ? currentStep - 1 : currentStep
            )
          }
          currentStep={currentStep}
        />
      </div>
    </>
  );
}

export default App;
