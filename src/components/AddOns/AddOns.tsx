import "./AddOns.css";

interface Props {
  billingCycle: string | undefined;
}

const AddOns = ({ billingCycle }: Props) => {
  const addOnsMonthly = [
    {
      id: "1",
      heading: "Online service",
      info: "Access to multiplayer games",
      pricing: "+$1/mo",
    },
    {
      id: "2",
      heading: "Larger storage",
      info: "Extra 1TB of cloud save",
      pricing: "+$2/mo",
    },
    {
      id: "3",
      heading: "Customizable profile",
      info: "Custom theme on your profile",
      pricing: "+$2/mo",
    },
  ];

  const addOnsYearly = [
    {
      id: "1",
      heading: "Online service",
      info: "Access to multiplayer games",
      pricing: "+$10/yr",
    },
    {
      id: "2",
      heading: "Larger storage",
      info: "Extra 1TB of cloud save",
      pricing: "+$20/yr",
    },
    {
      id: "3",
      heading: "Customizable profile",
      info: "Custom theme on your profile",
      pricing: "+$20/yr",
    },
  ];

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
              <span className="addon__container">
                <div className="step__heading addon__heading">
                  {addon.heading}
                </div>
                <div className="step__info addon__info">{addon.info}</div>
              </span>
              <span className="step__heading">{addon.pricing}</span>
            </div>
          )
        )}
      </form>
    </>
  );
};

export default AddOns;
