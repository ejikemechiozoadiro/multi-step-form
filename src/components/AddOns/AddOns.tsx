import { useEffect, useState } from "react";
import { addOnsMonthly } from "../../data/AddOnsMonthly";
import { addOnsYearly } from "../../data/AddOnsYearly";
import "./AddOns.css";

export interface AddOn {
  id: string;
  heading: string;
  pricing: number;
}

interface Props {
  billingCycle: string | undefined;
  onSelectAddons: (allAddons: AddOn[]) => void;
}

const AddOns = ({ billingCycle, onSelectAddons }: Props) => {
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([]);
  console.log(selectedAddOns);

  useEffect(() => {
    onSelectAddons(selectedAddOns);
  }, [selectedAddOns]);

  const handleAddOnClick = (addon: AddOn) => {
    setSelectedAddOns((allAddOns) => {
      if (allAddOns.some((item) => item.id === addon.id)) {
        // If addon is already selected, remove it from the list
        return allAddOns.filter((item) => item.id !== addon.id);
      } else {
        // Otherwise, add to the list
        return [...allAddOns, addon];
      }
    });
  };

  return (
    <>
      <form>
        <h2 className="step__heading">Pick add-ons</h2>

        <p className="step__info">
          Add-ons help enhance your gaming experience.{" "}
        </p>

        {(billingCycle === "monthly" ? addOnsMonthly : addOnsYearly).map(
          (addon) => (
            <div
              className={`addon ${selectedAddOns.map((item) =>
                item.id === addon.id ? "addon--selected" : ""
              )}`}
              key={addon.id}
              id={addon.id}
              onClick={() => handleAddOnClick(addon)}
            >
              <input
                className="addon__checkbox"
                type="checkbox"
                id={addon.id}
                checked={selectedAddOns.some((item) => item.id === addon.id)}
                readOnly
              />
              <div className="addon__container">
                <div className="step__heading addon__heading">
                  {addon.heading}
                </div>
                <div className="step__info addon__info">{addon.info}</div>
              </div>
              <span className="step__heading">
                +${addon.pricing}/{billingCycle === "monthly" ? "mo" : "yr"}
              </span>
            </div>
          )
        )}

        <button className="btn__prev">Go Back</button>
        <button className="btn__next">Next Step</button>
      </form>
    </>
  );
};

export default AddOns;
