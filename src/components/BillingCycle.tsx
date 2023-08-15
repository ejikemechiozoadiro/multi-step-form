import { useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import UsageLevel from "./UsageLevel";

interface Props {
  onSelectBilling: (billing: string | undefined) => void;
  onSelectUsageLevel: (usageLevel: string | undefined) => void;
  onSelectUsagePricing: (usagePricing: number | undefined) => void;
}

const BillingCycle = ({
  onSelectBilling,
  onSelectUsageLevel,
  onSelectUsagePricing,
}: Props) => {
  const [billingCycle, setBillingCycle] = useState<string>();
  const [usageLevel, setUsageLevel] = useState("");
  const [usagePricing, setUsagePricing] = useState<number | undefined>();

  useEffect(() => {
    onSelectBilling(billingCycle);
    onSelectUsageLevel(usageLevel);
    onSelectUsagePricing(usagePricing);
  });

  return (
    <>
      <form>
        <h2 className="step__heading">Select your plan</h2>

        <p className="step__info">
          You have the option of monthly or yearly billing
        </p>

        <UsageLevel
          billingCycle={billingCycle}
          onSelectUsageLevel={(usageLevel) => setUsageLevel(usageLevel)}
          onSelectUsagePricing={(usagePricing) => setUsagePricing(usagePricing)}
        />

        <ToggleSwitch onSelectBilling={(billing) => setBillingCycle(billing)} />

        <button className="btn__prev">Go Back</button>
        <button className="btn__next">Next Step</button>
      </form>
    </>
  );
};

export default BillingCycle;
