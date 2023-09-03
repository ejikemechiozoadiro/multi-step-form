import { FormEvent, useEffect, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import UsageLevel from "./UsageLevel";
import { Usage } from "./UsageLevel/UsageLevel";

interface Props {
  onSelectBilling: (billing: string | undefined) => void;
  onSelectUsageLevel: (usageLevel: string | undefined) => void;
  onSelectUsagePricing: (usagePricing: number | undefined) => void;
  onValid: (onValid: boolean) => void;
  selectedUsage: Usage | undefined;
  setSelectedUsage: React.Dispatch<React.SetStateAction<Usage | undefined>>;
}

const BillingCycle = ({
  onValid,
  onSelectBilling,
  onSelectUsageLevel,
  onSelectUsagePricing,
  selectedUsage,
  setSelectedUsage,
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

  //To check if the last word in ID (which is either monthly
  //or yearly) matches with the billingCycle (which can be
  //either monthly or yearly.
  const lastWordInId = selectedUsage?.id.split("-").pop();

  const handleSubmit = (event: FormEvent) => {
    {
      usageLevel &&
      billingCycle &&
      usagePricing &&
      lastWordInId === billingCycle
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
          selectedUsage={selectedUsage}
          setSelectedUsage={setSelectedUsage}
          onSelectUsagePricing={(usagePricing) => setUsagePricing(usagePricing)}
        />

        <ToggleSwitch onSelectBilling={(billing) => setBillingCycle(billing)} />

        <button className="btn__next">Next Step</button>
      </form>
    </>
  );
};

export default BillingCycle;
