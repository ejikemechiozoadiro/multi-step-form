import { AddOn } from "../AddOns/AddOns";
import "./Summary.css";
import straightLine from "../../assets/icon-straight-line.png";

interface Props {
  usageLevel: string | undefined;
  billingCycle: string | undefined;
  usagePricing: number | undefined;
  addOns: AddOn[] | undefined;
}

const Summary = ({ usageLevel, billingCycle, usagePricing, addOns }: Props) => {
  const totalPriceOfAddOns =
    addOns && addOns.reduce((total, addOn) => total + addOn.pricing, 0);

  const totalPrice =
    totalPriceOfAddOns && usagePricing ? totalPriceOfAddOns + usagePricing : "";

  const billingCycleCheck = billingCycle === "monthly" ? "mo" : "yr";

  return (
    <>
      <form>
        <div className="summary">
          <h2 className="step__heading">Finishing up</h2>
          <p className="step__info">
            Double-check everything looks OK before confirming.
          </p>
          <div className="summary__detail">
            <div className="summary__plan">
              <span>
                <div className="step__heading summary__plan-heading">
                  {usageLevel} ({billingCycle})
                </div>
                <a className="step__info">Change</a>
              </span>
              <span className="step__heading">
                ${usagePricing}/{billingCycleCheck}
              </span>
            </div>
            <div>
              <img className="summary__straight-line" src={straightLine} />

              {addOns &&
                addOns.map((addOn) => (
                  <div key={addOn.id} className="summary__addon">
                    <span className="step__info">{addOn.heading}</span>
                    <span className="step__heading">
                      +${addOn.pricing}/{billingCycleCheck}
                    </span>
                  </div>
                ))}
            </div>
          </div>
          <div className="summary__total">
            <span className="step__info ">
              Total (per {billingCycle === "monthly" ? "month" : "year"})
            </span>
            <span className="summary__total-price">
              +${totalPrice}/{billingCycleCheck}
            </span>
          </div>

          <button className="btn__summary">Confirm</button>
        </div>
      </form>
    </>
  );
};

export default Summary;
