import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiHospitalCross } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  const services = [
    "Dental Care",
    "Pharmacy Services",
    "Radiology & Imaging (X-ray, CT, MRI)",
    "Vaccination & Immunization",
    "Surgery & Operation Services",
    " Maternity & Child Care",
    "Ambulance Service",
    "Laboratory Testing",
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://chhatharhospital" },
    { icon: <FaTiktok />, url: "https://chhatharhospital" },
    { icon: <FaInstagram />, url: "https://chhatharhospital" },
    { icon: <FaYoutube />, url: "https://chhatharhospital" },
  ];

  const policies = ["Privacy Policy", "Terms of Service", "Cookies"];

  // const contactDetails = {
  //   address: "123 Business Ave",
  //   email: "info@company.com",
  //   phone: "+1 (123) 456-7890",
  // };

  const contactDetails = [
    {
      icon: <CgWebsite />,
      label: "Website",
      value: "https://www.chhatharhospital.com.np",
      type: "website",
    },
    {
      icon: <FaLocationDot />,
      label: "Location",
      value: "Chhathar-2, Tehrathum, Nepal",
      type: "location",
    },
    {
      icon: <MdEmail />,
      label: "Email",
      value: "chhatharhospital1133@gmail.com",
      type: "email",
    },
    {
      icon: <BsFillTelephoneForwardFill />,
      label: "Phone",
      value: "025-456543",
      type: "phone",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <GiHospitalCross size={25} className="text-2xl mr-2" />
              <span className="ml-2 text-xl font-bold">Chhathar-Hospital</span>
            </div>
            <p className="text-gray-400">Your Health, Our Priority.</p>

            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-gray-400 hover:text-white transition text-xl"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-3">
              {contactDetails.map((item, index) => (
                <p key={index} className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>

                  {item.type === "email" ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="hover:text-white transition"
                    >
                      {item.value}
                    </a>
                  ) : item.type === "phone" ? (
                    <a
                      href={`tel:${item.value}`}
                      className="hover:text-white transition"
                    >
                      {item.value}
                    </a>
                  ) : item.type === "website" ? (
                    <a
                      href={item.value}
                      target="_blank"
                      className="hover:text-white transition"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </p>
              ))}
            </address>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Company. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {policies.map((policy, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-500 hover:text-white text-sm transition"
              >
                {policy}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
