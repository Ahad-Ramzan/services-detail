import { FaRegFilePdf } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
const Brochures = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-tertiary rounded-lg mb-4">
      <h2 className="text-lg font-bold text-secondary mb-4">Brouchures</h2>
      <div className="flex flex-col space-y-3">
        <button className="space-y-1  flex items-center bg-white border border-gray-200 rounded-lg  w-full">
          <span className="bg-secondary text-white font-medium h-full p-3 rounded-l-lg">
            <FaRegFilePdf />
          </span>
          <p className="items-center mx-7 text-[#42545e] font-medium  hover:text-primary">
            Download.pdf
          </p>
        </button>
        <button className="space-y-1 flex items-center bg-white border border-gray-200 rounded-lg  w-full">
          <span className="bg-secondary text-white font-medium h-full p-3 rounded-l-lg">
            <FaRegFileAlt />
          </span>
          <p className="items-center mx-7 text-[#42545e] font-medium  hover:text-primary">
            Download.txt
          </p>
        </button>
      </div>
    </div>
  );
};

export default Brochures;
