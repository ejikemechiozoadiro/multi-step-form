import { useState } from "react";
import AddOns from "../AddOns";
import BillingCycle from "../BillingCycle";
import PersonalInfo from "../PersonalInfo";
import "./MainContainer.css";
import { AddOn } from "../AddOns/AddOns";
import Summary from "../Summary";

interface Props {
  currentStep: number | undefined;
  onNextStep: (nextStep: number) => void;
}

const MainContainer = ({ currentStep, onNextStep }: Props) => {
  const [billingCycle, setBillingCycle] = useState<string | undefined>();
  const [usageLevel, setUsageLevel] = useState<string | undefined>();
  const [usagePricing, setUsagePricing] = useState<number | undefined>();
  const [addOns, setAddOns] = useState<AddOn[] | undefined>();

  const handleNext = (isValid: boolean) => {
    if (isValid) onNextStep(2);
  };

  return (
    <>
      <div className="main-container">
        <div className="main-content">
          {currentStep === 1 && <PersonalInfo onValid={() => handleNext} />}
          {currentStep === 2 && (
            <BillingCycle
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
      <button className="btn__prev">Go Back</button>
      <div className="white__space"></div>
    </>
  );
};

export default MainContainer;
