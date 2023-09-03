import { useEffect, useState } from "react";
import { usageMonthly } from "../../data/UsageMonthly";
import { usageYearly } from "../../data/usageYearly";
import "./UsageLevel.css";

export interface Usage {
  id: string;
  heading: string;
  pricing: number;
  img: {
    src: string;
    alt: string;
  };
  free: string;
}

interface Props {
  billingCycle: string | undefined;
  onSelectUsageLevel: (usageLevel: string) => void;
  onSelectUsagePricing: (usagePricing: number | undefined) => void;
  selectedUsage: Usage | undefined;
  setSelectedUsage: React.Dispatch<React.SetStateAction<Usage | undefined>>;
}

const UsageLevel = ({
  billingCycle,
  onSelectUsageLevel,
  onSelectUsagePricing,
  selectedUsage,
  setSelectedUsage,
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [usageLevel, setUsageLevel] = useState("");
  const [usagePricing, setUsagePricing] = useState<number>();

  useEffect(() => {
    onSelectUsageLevel(usageLevel);
    onSelectUsagePricing(usagePricing);
  }, [usageLevel, usagePricing]);

  return (
    <>
      {(billingCycle === "monthly" ? usageMonthly : usageYearly).map(
        (usage) => (
          <div
            key={usage.id}
            onClick={() => {
              setSelectedIndex(usage.id);
              setUsageLevel(usage.heading);
              setUsagePricing(usage.pricing);
              setSelectedUsage(usage);
            }}
            className={`usage 
              ${selectedUsage?.id === usage.id ? "usage--selected" : ""}
              `}
          >
            <img
              src={usage.img.src}
              alt={usage.img.alt}
              className="usage__image"
            />
            <div className="usage__container">
              <div className="step__heading usage__heading">
                {usage.heading}
              </div>
              <div className="step__info">
                ${usage.pricing}/{billingCycle === "monthly" ? "mo" : "yr"}
              </div>
              {billingCycle === "yearly" && (
                <div className="step__heading">{usage.free}</div>
              )}
            </div>
          </div>
        )
      )}
    </>
  );
};

export default UsageLevel;
