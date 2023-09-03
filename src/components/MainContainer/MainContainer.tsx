import { useState } from "react";
import AddOns from "../AddOns";
import BillingCycle from "../BillingCycle";
import PersonalInfo from "../PersonalInfo";
import "./MainContainer.css";
import { AddOn } from "../AddOns/AddOns";
import Summary from "../Summary";
import { Usage } from "../UsageLevel/UsageLevel";

interface Props {
  currentStep: number | undefined;
  onValidNext: (next: boolean | undefined) => void;
  onPrevious: (previous: boolean | undefined) => void;
}

const MainContainer = ({ currentStep, onValidNext, onPrevious }: Props) => {
  const [personalData, setPersonalData] = useState<PersonalInfo>();
  const [addOns, setAddOns] = useState<AddOn[] | undefined>();
  const [selectedUsage, setSelectedUsage] = useState<Usage>();
  const [billingCycle, setBillingCycle] = useState<string>();
  console.log(selectedUsage);
  console.log(billingCycle);

  const handleNext = (isValid: boolean) => {
    if (isValid) onValidNext(true);
  };

  const handlePrevious = () => {
    onPrevious(true);
  };

  return (
    <>
      <div className="main-container">
        <div className="main-content">
          {currentStep === 1 && (
            <PersonalInfo
              personalData={personalData}
              onDataSubmit={(data) => setPersonalData(data)}
              onValid={handleNext}
            />
          )}
          {currentStep === 2 && (
            <BillingCycle
              onValid={handleNext}
              selectedUsage={selectedUsage}
              setSelectedUsage={setSelectedUsage}
              billingCycle={billingCycle}
              setBillingCycle={setBillingCycle}
            />
          )}
          {currentStep === 3 && (
            <AddOns
              onValid={handleNext}
              addOnsFromMain={addOns}
              billingCycle={billingCycle}
              selectedAddOns={addOns}
              setSelectedAddOns={setAddOns}
            />
          )}
          {currentStep === 4 && (
            <Summary
              selectedUsage={selectedUsage}
              billingCycle={billingCycle}
              addOns={addOns}
            />
          )}
        </div>
      </div>
      {currentStep !== 1 && (
        <button className="btn__prev" onClick={handlePrevious}>
          Go Back
        </button>
      )}
      <div className="white__space"></div>
    </>
  );
};

export default MainContainer;
