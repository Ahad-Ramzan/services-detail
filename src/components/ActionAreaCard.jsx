import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const ActionAreaCard = () => {
  return (
    <div className="my-5">
      <div className="max-w-md mx-auto relative flex flex-col">
        <div className="w-full h-auto bg-white">
          <img
            src="https://flywebwp.websitelayout.net/wp-content/uploads/2023/09/contact-img.jpg"
            alt="Action img"
          />
        </div>
        <div className="w-full bg-secondary text-white p-4 text-center flex flex-col gap-2 ">
          <h1 className="text-[22px] leading-[26px] font-bold mt-2 pt-5">
            How Can We Help
          </h1>
          <p className="text-[16px] leading-[27px] font-medium flex justify-center align-middle">
            <span className="mt-1.5 mr-3">
              <FaPhoneAlt />
            </span>
            (+44)123456789
          </p>
          <p className="text-[16px] leading-[27px] font-medium flex justify-center align-middle">
            <span className="mt-1.5 mr-3">
              <IoMailOpen />
            </span>
            addyour@emailhere
          </p>
        </div>

        {/* Circle with icon */}
        <div className="w-[80px] h-[80px] md:w-[70px] md:h-[70px] rounded-full bg-primary absolute top-[67%] md:top-[70%] lg:top-[64%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <TfiHeadphoneAlt className="text-white text-[40px] mx-auto my-5 md:my-4" />
        </div>
      </div>
    </div>
  );
};

export default ActionAreaCard;
