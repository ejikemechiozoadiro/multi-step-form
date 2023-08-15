import { AddOn } from "./AddOns/AddOns";

interface Props {
  usageLevel: string | undefined;
  billingCycle: string | undefined;
  usagePricing: number | undefined;
  addOns: AddOn[] | undefined;
}

const Summary = ({ usageLevel, billingCycle, usagePricing, addOns }: Props) => {
  const totalPriceOfAddOns =
    addOns && addOns.reduce((total, addOn) => total + addOn.pricing, 0);

  const billingCycleCheck = billingCycle === "monthly" ? "mo" : "yr";

  return (
    <>
      <form>
        <h2 className="step__heading">Finishing up</h2>

        <p className="step__info">
          Double-check everything looks OK before confirming.
        </p>
        <div>
          <div>
            <span>
              <div className="step__heading">
                {usageLevel} (
                {billingCycle === "monthly" ? "Monthly" : "Yearly"})
              </div>
              <a className="step__info">Change</a>
            </span>
            <span className="step__heading">
              {usagePricing}/{billingCycleCheck}
            </span>
          </div>

          <div>
            {addOns &&
              addOns.map((addOn) => (
                <div>
                  <span className="step__info">{addOn.heading}</span>
                  <span className="step__heading">
                    +${addOn.pricing}/{billingCycleCheck}
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div>
          <span className="step__info">
            Total (per {billingCycle === "monthly" ? "month" : "year"})
          </span>
          <span className="color-primary">
            +${totalPriceOfAddOns}/{billingCycleCheck}
          </span>
        </div>
      </form>
    </>
  );
};

export default Summary;
