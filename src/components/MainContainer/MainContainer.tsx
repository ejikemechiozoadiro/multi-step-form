import PersonalInfo from "../PersonalInfo";
import "./MainContainer.css";

interface Props {
  currentStep: string;
}

const MainContainer = ({ currentStep }: Props) => {
  return (
    <>
      <div className="main-container">
        <div className="main-content">
          {currentStep === "step1" && <PersonalInfo />}
        </div>
      </div>
      <div className="white__space"></div>
    </>
  );
};

export default MainContainer;
