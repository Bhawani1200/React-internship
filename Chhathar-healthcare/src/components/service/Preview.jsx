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
          Meet Our Expert Doctors
        </h1>
        <p className="text-2xl text-muted-foreground font-semibold  mx-auto text-pretty text-gray-700">
          {" "}
          Dedicated specialists committed to providing quality care for you and
          your family.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doctorsData.map((doctor) => (
          <div key={doctor.id} className="bg-white p-6 shadow rounded-xl">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 text-xl font-bold text-slate-900">
              {doctor.name}
            </h3>
            <p className="text-indigo-600 font-semibold">{doctor.speciality}</p>
            <p className="text-sm text-gray-600 mt-1">{doctor.degree}</p>
            <p className="text-gray-600 text-sm mt-2">{doctor.experience}</p>
            <p className="text-gray-500 text-sm">{doctor.schedule}</p>
            <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Preview;
