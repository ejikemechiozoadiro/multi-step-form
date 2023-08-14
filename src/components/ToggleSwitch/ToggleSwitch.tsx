import { useEffect, useState } from "react";
import "./ToggleSwitch.css";

interface Props {
  onSelectBilling: (billing: string) => void;
}

const ToggleSwitch = ({ onSelectBilling }: Props) => {
  const [isMonthly, setBilling] = useState<boolean>(true);
  const billingCycle = isMonthly ? "monthly" : "yearly";

  useEffect(() => {
    onSelectBilling(billingCycle);
  }, [billingCycle]);

  return (
    <div className="toggle__switch">
      <label
        htmlFor="billing"
        className={`${isMonthly ? "step__heading" : "step__info"}`}
      >
        Monthly
      </label>
      <input
        id="billing"
        type="checkbox"
        className="toggle__checkbox"
        onChange={() => {
          setBilling(!isMonthly);
        }}
      />
      <a onClick={() => setBilling(!isMonthly)} className="toggle__container">
        <span
          className={`toggle__slider ${!isMonthly ? "toggle__checked" : ""}`}
        ></span>
      </a>
      <label
        htmlFor="billing"
        className={`${!isMonthly ? "step__heading" : "step__info"}`}
      >
        Yearly
      </label>
    </div>
  );
};

export default ToggleSwitch;
