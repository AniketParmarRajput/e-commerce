import React, { useEffect, useState } from "react";
import image1 from "../asset/service-promo-1.png";
import image2 from "../asset/service-promo-2.png";
import image3 from "../asset/service-promo-3.png";
import image4 from "../asset/service-promo-4.png";

const Side = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("features-section");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div className="px-4">
      <section
        id="features-section"
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center py-10 ${
          isVisible ? "animate-fadeInBottom duration-200 delay-[500ms]" : "opacity-0"
        }`}
      >
        {[
          {
            img: image1,
            title: "FREE SHIPPING",
            description:
              "Get 10% cash back, free shipping, free returns, and more at 1000+ top retailers!",
          },
          {
            img: image2,
            title: "30 DAYS MONEY BACK",
            description:
              "100% satisfaction guaranteed, or get your money back within 30 days!",
          },
          {
            img: image3,
            title: "SAFE PAYMENT",
            description: "Pay with the world’s most popular and secure payment methods.",
          },
          {
            img: image4,
            title: "LOYALTY CUSTOMER",
            description:
              "Card for the other 30% of their purchases at a rate of 1% cash back.",
          },
        ].map((feature, idx) => (
          <div key={idx} className="text-center flex flex-col justify-center items-center space-y-5 w-full">
            <img className="h-20 sm:h-24 md:h-28" src={feature.img} alt="Feature Icon" />
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">{feature.title}</h1>
            <p className="text-sm sm:text-base md:text-lg">{feature.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Side;



