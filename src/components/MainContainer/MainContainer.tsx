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
  const [billingCycle, setBillingCycle] = useState<string>();
  const [allAddOns, setAllAddOns] = useState<AddOn[] | undefined>();

  return (
    <>
      <div className="main-container">
        <div className="main-content">
          {currentStep === "step1" && <PersonalInfo />}
          {currentStep === "step2" && (
            <BillingCycle
              onSelectBilling={(billing) => setBillingCycle(billing)}
            />
          )}
          {currentStep === "step3" && (
            <AddOns
              onSelectAddons={(allAddOns) => setAllAddOns(allAddOns)}
              billingCycle={billingCycle}
            />
          )}
          {currentStep === "step4" && <Summary />}
        </div>
      </div>
      <div className="white__space"></div>
    </>
  );
};

export default MainContainer;
