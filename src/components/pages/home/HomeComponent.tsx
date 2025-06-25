import React from "react";
import Banner from "./Banner/Banner";
import BenefitsComponent from "./Benefits/BenefitsComponent";
import HowItsWorks from "./HowItsWorks/HowItsWorks";
import Pricing from "./Pricing/Pricing";

// import { Container } from "@/components/ui-library/container";

const HomeComponent = () => {
  return (
    <div className="">
      <Banner />
      <BenefitsComponent/>
      <HowItsWorks/>
      <Pricing/>
    </div>
  );
};

export default HomeComponent;
