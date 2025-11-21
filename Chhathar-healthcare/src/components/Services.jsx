import React from "react";
import HeroBanner from "./home/HeroBanner";
import { servicesData } from "../utils/servicesData";
import Card from "../components/shared/ServiceCard";


const Services = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-4 mt-10">
      <div className="py-5">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h1 className="mb-4 font-bold text-3xl md:text-4xl text-balance text-foreground">
            Our Services
          </h1>
          <p className="text-2xl text-muted-foreground font-semibold  mx-auto text-pretty text-gray-700">
            {" "}
            Explore our collective services and take advantage soon.
          </p>
        </div>

        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pb-6 pt-14">
          {servicesData.map((item) => (
            <Card
              key={item.id}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
