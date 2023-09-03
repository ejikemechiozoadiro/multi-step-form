import { FormEvent, useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import UsageLevel from "./UsageLevel";
import { Usage } from "./UsageLevel/UsageLevel";

interface Props {
  onValid: (onValid: boolean) => void;
  selectedUsage: Usage | undefined;
  setSelectedUsage: React.Dispatch<React.SetStateAction<Usage | undefined>>;
  billingCycle: string | undefined;
  setBillingCycle: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const BillingCycle = ({
  onValid,
  selectedUsage,
  setSelectedUsage,
  billingCycle,
  setBillingCycle,
}: Props) => {
  //To check if the last word in ID (which is either monthly
  //or yearly) matches with the billingCycle (which can be
  //either monthly or yearly.
  const lastWordInId = selectedUsage?.id.split("-").pop();

  const handleSubmit = (event: FormEvent) => {
    {
      selectedUsage && lastWordInId === billingCycle
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
          selectedUsage={selectedUsage}
          setSelectedUsage={setSelectedUsage}
        />

        <ToggleSwitch
          billingCycle={billingCycle}
          setBillingCycle={setBillingCycle}
          // onSelectBilling={(billing) => setBillingCycle(billing)}
        />

        <button className="btn__next">Next Step</button>
      </form>
    </>
  );
};

export default BillingCycle;
