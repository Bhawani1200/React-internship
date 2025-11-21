import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-14 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enquire About Our{" "}
            <span className="text-red-600">Healthcare Services</span>
          </h1>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your health and well-being are our top priority. Fill out the form
            below to connect with our medical team, and we’ll get back to you
            with the care and guidance you need.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="md:flex">
            {/* Left Side */}
            <div className="md:w-1/3 bg-linear-to-br from-red-600 to-red-800 p-10 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
                <ul className="space-y-4">
                  {[
                    "Access trusted medical services with expert doctors and modern facilities.",
                    "Quick and reliable emergency response whenever you need urgent care.",
                    "Accurate and fast pathology & radiology test results with modern technology.",
                    "Experienced nurses for post-surgery care, senior care, and patient assistance at home.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-red-200 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">
                  Need immediate assistance?
                </h3>
                <p className="text-red-100 mb-2">Call us at +977 9810000000</p>
                <p className="text-sm text-red-200">
                  Our team is available 10AM - 6PM, Sunday to Saturday
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="md:w-2/3 p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                      required
                    />
                  </div>

                  {/* Course Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Course Interested In
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-red-500 focus:border-red-500"
                      required
                    >
                      <option value="">Dental Care</option>
                      <option value="Graphic Design">Pharmacy Services</option>
                      <option value="Web Development">
                        Radiology & Imaging (X-ray, CT, MRI)
                      </option>
                      <option value="Animation">
                        Vaccination & Immunization
                      </option>
                      <option value="UI/UX Design">
                        Surgery & Operation Services
                      </option>
                      <option value="UI/UX Design">
                        Maternity & Child Care
                      </option>
                      <option value="UI/UX Design">Ambulance Service</option>
                      <option value="UI/UX Design">Telemedicine </option>
                      <option value="UI/UX Design">Laboratory Testing </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your interests and goals..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-red-600 text-white font-medium rounded-lg shadow-sm hover:bg-red-700 transition duration-300"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
