import { AddOn } from "./AddOns/AddOns";

interface Props {
  usageLevel: string;
  billingCycle: string;
  usagePricing: number;
  addOns: AddOn;
}

const Summary = () => {
  return (
    <>
      <form>
        <h2 className="step__heading">Finishing up</h2>

        <p className="step__info">
          Double-check everything looks OK before confirming.
        </p>
        <div>
          <p></p>
        </div>
      </form>
    </>
  );
};

export default Summary;
