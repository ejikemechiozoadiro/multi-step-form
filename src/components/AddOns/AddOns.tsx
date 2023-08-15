import { addOnsMonthly } from "../../data/AddOnsMonthly";
import { addOnsYearly } from "../../data/AddOnsYearly";
import "./AddOns.css";

interface Props {
  billingCycle: string | undefined;
}

const AddOns = ({ billingCycle }: Props) => {
  return (
    <>
      <form>
        <h2 className="step__heading">Pick add-ons</h2>

        <p className="step__info">
          Add-ons help enhance your gaming experience.{" "}
        </p>

        {(billingCycle === "monthly" ? addOnsMonthly : addOnsYearly).map(
          (addon) => (
            <div className="addon">
              <input type="checkbox" id={addon.id} />
              <div className="addon__container">
                <div className="step__heading addon__heading">
                  {addon.heading}
                </div>
                <div className="step__info addon__info">{addon.info}</div>
              </div>
              <span className="step__heading">{addon.pricing}</span>
            </div>
          )
        )}
      </form>
    </>
  );
};

export default AddOns;
