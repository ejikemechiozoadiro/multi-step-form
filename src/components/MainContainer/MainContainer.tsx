import { useState } from "react";
import AddOns from "../AddOns";
import BillingCycle from "../BillingCycle";
import PersonalInfo from "../PersonalInfo";
import "./MainContainer.css";
import { AddOn } from "../AddOns/AddOns";
import Summary from "../Summary";

interface Props {
  currentStep: number | undefined;
  onValidNext: (next: boolean | undefined) => void;
  onPrevious: (previous: boolean | undefined) => void;
}

const MainContainer = ({ currentStep, onValidNext, onPrevious }: Props) => {
  const [billingCycle, setBillingCycle] = useState<string | undefined>();
  const [usageLevel, setUsageLevel] = useState<string | undefined>();
  const [usagePricing, setUsagePricing] = useState<number | undefined>();
  const [addOns, setAddOns] = useState<AddOn[] | undefined>();
  const [personalData, setPersonalData] = useState<PersonalInfo>();

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
              onDataSubmit={(data) => setPersonalData(data)}
              onValid={handleNext}
            />
          )}
          {currentStep === 2 && (
            <BillingCycle
              onValid={handleNext}
              onSelectBilling={(billing) => setBillingCycle(billing)}
              onSelectUsageLevel={(usageLevel) => setUsageLevel(usageLevel)}
              onSelectUsagePricing={(usagePricing) =>
                setUsagePricing(usagePricing)
              }
            />
          )}
          {currentStep === 3 && (
            <AddOns
              onSelectAddons={(allAddOns) => setAddOns(allAddOns)}
              billingCycle={billingCycle}
            />
          )}
          {currentStep === 4 && (
            <Summary
              usageLevel={usageLevel}
              billingCycle={billingCycle}
              usagePricing={usagePricing}
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
