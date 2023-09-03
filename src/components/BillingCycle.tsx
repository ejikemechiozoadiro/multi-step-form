import { FormEvent, useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import UsageLevel from "./UsageLevel";

interface Props {
  onSelectBilling: (billing: string | undefined) => void;
  onSelectUsageLevel: (usageLevel: string | undefined) => void;
  onSelectUsagePricing: (usagePricing: number | undefined) => void;
  onValid: (onValid: boolean) => void;
}

const BillingCycle = ({
  onValid,
  onSelectBilling,
  onSelectUsageLevel,
  onSelectUsagePricing,
}: Props) => {
  const [billingCycle, setBillingCycle] = useState<string>();
  const [usageLevel, setUsageLevel] = useState("");
  const [usagePricing, setUsagePricing] = useState<number | undefined>();
  // const [validate, setValidate] = useState<boolean | null>(null);

  useEffect(() => {
    onSelectBilling(billingCycle);
    onSelectUsageLevel(usageLevel);
    onSelectUsagePricing(usagePricing);
  }, [billingCycle, usageLevel, usagePricing]);

  const handleSubmit = (event: FormEvent) => {
    {
      usageLevel && billingCycle && usagePricing
        ? onValid(true)
        : onValid(false);
    }
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="step__heading">Select your plan</h2>

        <p className="step__info">
          You have the option of monthly or yearly billing
        </p>

        <UsageLevel
          billingCycle={billingCycle}
          onSelectUsageLevel={(usageLevel) => {
            setUsageLevel(usageLevel);
          }}
          onSelectUsagePricing={(usagePricing) => setUsagePricing(usagePricing)}
        />

        <ToggleSwitch onSelectBilling={(billing) => setBillingCycle(billing)} />

        <button className="btn__next">Next Step</button>
      </form>
    </>
  );
};

export default BillingCycle;
