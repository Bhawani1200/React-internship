import React from "react";
import hospital from "../assets/sliders/hospital.jpg";
const About = () => {
  const stats = [
    { label: "Patients Served", value: "15000+" },
    { label: "Happy Patients", value: "100000+" },
    { label: "Years Experience", value: "28+" },
    { label: "Team Members", value: "20+" },
  ];

  return (
    <section className="py-20 px-4 md:px-12 lg:px-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <p className="text-base font-medium text-gray-500 mb-3">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a trusted healthcare institution committed to delivering
            safe, compassionate, and patient-centered medical services.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-none shadow-sm p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">
                Who We Are
              </h3>

              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Founded with the vision of providing world-class medical care,
                  our hospital has grown into one of the most well-respected
                  healthcare centers in the region. We offer a comprehensive
                  range of medical services including emergency care,
                  diagnostics, surgical procedures, maternity care, intensive
                  care, and specialized treatments across multiple departments.
                </p>
                <p>
                  Our team consists of skilled and compassionate healthcare
                  professionals dedicated to healing with empathy, integrity,
                  and excellence. Equipped with advanced medical technology and
                  modern infrastructure, we ensure accurate diagnosis and
                  effective treatment in a comfortable and safe environment.
                </p>
              </div>

              {/* Dynamic Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                {stats.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-black mb-2">
                      {item.value}
                    </div>
                    <div className="text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Placeholder Image */}
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <div className="text-center">
                <img src={hospital} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
