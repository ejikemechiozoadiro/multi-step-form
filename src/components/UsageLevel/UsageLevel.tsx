import { useEffect, useState } from "react";
import { usageMonthly } from "../../data/UsageMonthly";
import { usageYearly } from "../../data/usageYearly";
import "./UsageLevel.css";

interface Props {
  billing: string | undefined;
  onSelectUsageLevel: (usageLevel: string) => void;
}

const UsageLevel = ({ billing, onSelectUsageLevel }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [usageLevel, setUsageLevel] = useState("");

  useEffect(() => {
    onSelectUsageLevel(usageLevel);
  }, [usageLevel]);

  return (
    <>
      {(billing === "monthly" ? usageMonthly : usageYearly).map((usage) => (
        <div
          key={usage.id}
          id={usage.id}
          onClick={() => {
            setSelectedIndex(usage.id);
            setUsageLevel(usage.id);
          }}
          className={`usage__container 
        ${selectedIndex === usage.id ? "usage__selected" : ""}`}
        >
          <img
            src={usage.img.src}
            alt={usage.img.alt}
            className="usage__image"
          />
          <div className="usage">
            <div className="step__heading usage__heading">{usage.heading}</div>
            <div className="step__info usage__info">{usage.info}</div>
            {billing === "yearly" && (
              <div className="step__heading">{usage.free}</div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default UsageLevel;
