import { useState } from "react";
import "./Nav.css";

interface Props {
  onSelectStep: (step: string) => void;
}

const Nav = ({ onSelectStep }: Props) => {
  const [step, setStep] = useState("");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStep(e.target.value);
    onSelectStep(e.target.value);
  };

  return (
    <>
      <div className="nav">
        <div className="nav__container">
          <label
            className={`step ${step === "step1" ? "selected" : ""}`}
            htmlFor="step1"
          >
            1
          </label>
          <span className="nav__container-text">
            <label htmlFor="step1" className="nav__container-step">
              STEP 1
            </label>
            <label htmlFor="step1" className="nav__container-info">
              YOUR INFO
            </label>
          </span>
          <input
            className="step-radio"
            type="radio"
            value="step1"
            name="step"
            id="step1"
            onChange={handleOnChange}
          />
        </div>

        <div className="nav__container">
          <label
            className={`step ${step === "step2" ? "selected" : ""}`}
            htmlFor="step2"
          >
            2
          </label>
          <span className="nav__container-text">
            <label htmlFor="step2" className="nav__container-step">
              STEP 2
            </label>
            <label htmlFor="step2" className="nav__container-info">
              SELECT PLAN
            </label>
          </span>
          <input
            className="step-radio"
            type="radio"
            name="step"
            value="step2"
            id="step2"
            onChange={handleOnChange}
          />
        </div>

        <div className="nav__container">
          <label
            className={`step ${step === "step3" ? "selected" : ""}`}
            htmlFor="step3"
          >
            3
          </label>
          <span className="nav__container-text">
            <label htmlFor="step3" className="nav__container-step">
              STEP 3
            </label>
            <label htmlFor="step3" className="nav__container-info">
              ADD-ONS
            </label>
          </span>
          <input
            className="step-radio"
            type="radio"
            name="step"
            value="step3"
            id="step3"
            onChange={handleOnChange}
          />
        </div>

        <div className="nav__container">
          <label
            className={`step ${step === "step4" ? "selected" : ""}`}
            htmlFor="step4"
          >
            4
          </label>
          <span className="nav__container-text">
            <label htmlFor="step4" className="nav__container-step">
              STEP 4
            </label>
            <label htmlFor="step4" className="nav__container-info">
              SUMMARY
            </label>
          </span>
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
