import { useState } from "react";
import AddOns from "../AddOns";
import BillingCycle from "../BillingCycle";
import PersonalInfo from "../PersonalInfo";
import "./MainContainer.css";

interface Props {
  currentStep: string;
}

const MainContainer = ({ currentStep }: Props) => {
  const [billingCycle, setBillingCycle] = useState<string>();

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
          {currentStep === "step3" && <AddOns billingCycle={billingCycle} />}
        </div>
      </div>
      <div className="white__space"></div>
    </>
  );
};

export default MainContainer;
