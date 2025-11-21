import React from "react";
import { doctorsData } from "../../utils/previewData";
import { Card } from "@mui/material";
import PreviewCard from "./PreviewCard";

const Preview = ({
  image,
  name,
  speciality,
  degree,
  experience,
  schedule,
  description,
}) => {
  return (
    <div className="py-5">
      <div className="flex flex-col justify-center items-center space-y-2">
        <h1 className="mb-4 font-bold text-3xl md:text-4xl text-balance text-foreground">
          Doctors Preview
        </h1>
        <p className="text-2xl text-muted-foreground font-semibold  mx-auto text-pretty text-gray-700">
          {" "}
          Explore our doctors and take advantage soon.
        </p>
      </div>

      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pb-6 pt-14">
        {doctorsData.map((item) => (
          <PreviewCard
            key={item.id}
            image={item.image}
            name={item.name}
            speciality={item.speciality}
            degree={item.degree}
            experience={item.experience}
            schedule={item.schedule}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Preview;
