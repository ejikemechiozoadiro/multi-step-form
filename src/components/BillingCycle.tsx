import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import UsageLevel from "./UsageLevel";

const BillingCycle = () => {
  const [billingCycle, setBillingCycle] = useState<string>();
  const [usageLevel, setUsageLevel] = useState("");

  return (
    <>
      <form>
        <h2 className="step__heading">Select your plan</h2>

        <p className="step__info">
          You have the option of monthly or yearly billing
        </p>

        <UsageLevel
          billing={billingCycle}
          onSelectUsageLevel={(usageLevel) => setUsageLevel(usageLevel)}
        />

        <ToggleSwitch onSelectBilling={(billing) => setBillingCycle(billing)} />

        <button className="btn__prev">Go Back</button>
        <button className="btn__next">Next Step</button>
      </form>
    </>
  );
};

export default BillingCycle;
