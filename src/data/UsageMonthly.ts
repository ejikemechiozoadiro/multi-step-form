import arcade from "../assets/icon-arcade.svg";
import advanced from "../assets/icon-advanced.svg";
import pro from "../assets/icon-pro.svg";


export const usageMonthly = [
    {
      id: "arcade",
      img: { src: arcade, alt: "arcade" },
      heading: "Arcade",
      pricing: 9,
    },

    {
      id: "advanced",
      img: { src: advanced, alt: "advanced" },
      heading: "Advanced",
      pricing: 12,
      free: "2 months free",
    },

    {
      id: "pro",
      img: { src: pro, alt: "pro" },
      heading: "Pro",
      pricing: 15,
      free: "2 months free",
    },
  ];