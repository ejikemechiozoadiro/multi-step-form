import { useState } from "react";
import AddOns from "../AddOns";
import BillingCycle from "../BillingCycle";
import PersonalInfo from "../PersonalInfo";
import "./MainContainer.css";
import { AddOn } from "../AddOns/AddOns";
import Summary from "../Summary";

interface Props {
  currentStep: string;
}

const MainContainer = ({ currentStep }: Props) => {
  const [billingCycle, setBillingCycle] = useState<string | undefined>();
  const [usageLevel, setUsageLevel] = useState<string | undefined>();
  const [usagePricing, setUsagePricing] = useState<number | undefined>();
  const [addOns, setAddOns] = useState<AddOn[] | undefined>();

  return (
    <>
      <div className="main-container">
        <div className="main-content">
          {currentStep === "step1" && <PersonalInfo />}
          {currentStep === "step2" && (
            <BillingCycle
              onSelectBilling={(billing) => setBillingCycle(billing)}
              onSelectUsageLevel={(usageLevel) => setUsageLevel(usageLevel)}
              onSelectUsagePricing={(usagePricing) =>
                setUsagePricing(usagePricing)
              }
            />
          )}
          {currentStep === "step3" && (
            <AddOns
              onSelectAddons={(allAddOns) => setAddOns(allAddOns)}
              billingCycle={billingCycle}
            />
          )}
          {currentStep === "step4" && usageLevel && billingCycle && (
            <Summary
              usageLevel={usageLevel}
              billingCycle={billingCycle}
              usagePricing={usagePricing}
              addOns={addOns}
            />
          )}
        </div>
      </div>
      <div className="white__space"></div>
    </>
  );
};

export default MainContainer;
