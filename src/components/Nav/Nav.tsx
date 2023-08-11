import { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [step, setStep] = useState("");
  console.log(step);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStep(e.target.value);
  };

  return (
    <>
      <div className="nav">
        <div>
          <label
            className={`step ${step === "step1" ? "selected" : ""}`}
            htmlFor="step1"
          >
            1
          </label>
          <input
            className="step-radio"
            type="radio"
            value="step1"
            name="step"
            id="step1"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label
            className={`step ${step === "step2" ? "selected" : ""}`}
            htmlFor="step2"
          >
            2
          </label>
          <input
            className="step-radio"
            type="radio"
            name="step"
            value="step2"
            id="step2"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label
            className={`step ${step === "step3" ? "selected" : ""}`}
            htmlFor="step3"
          >
            3
          </label>
          <input
            className="step-radio"
            type="radio"
            name="step"
            value="step3"
            id="step3"
            onChange={handleOnChange}
          />
        </div>

        <div>
          <label
            className={`step ${step === "step4" ? "selected" : ""}`}
            htmlFor="step4"
          >
            4
          </label>
          <input
            className="step-radio"
            type="radio"
            name="step"
            value="step4"
            id="step4"
            onChange={handleOnChange}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
