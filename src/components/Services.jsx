import { useState } from "react";
import ActionAreaCard from "./ActionAreaCard";
import Brochures from "./Brochures";

const MainServices = () => {
  const [selectedService, setSelectedService] = useState("Web Designing");

  const services = [
    "Web Designing",
    "Web Development",
    "Web Application",
    "Content Writing",
    "Design Branding",
    "Digital Marketing",
  ];

  return (
    <div className="">
      <div className="max-w-md mx-auto p-4 bg-tertiary rounded-lg my-5">
        <h2 className="text-lg font-bold text-secondary mb-4">
          {" "}
          <span className="text-primary">Main</span> Services
        </h2>
        <div className="space-y-2">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setSelectedService(service)}
              className={`w-full flex justify-between items-center px-4 py-3 rounded-md text-sm font-medium ${
                selectedService === service
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-secondary hover:text-white "
              }`}
            >
              {service}
              <span className="text-black ">{">"}</span>
            </button>
          ))}
        </div>
      </div>
      <Brochures />
      <ActionAreaCard />
    </div>
  );
};

export default MainServices;
