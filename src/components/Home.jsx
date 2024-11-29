import WebDesign from "../assets/webDesign.jpg";
import Cards from "./Cards";
import { TiTick } from "react-icons/ti";

const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:w-[90%] mx-auto mt-5 text-secondary">
        <div className="p-1 sm:p-5">
          <div>
            <div className="mb-5">
              <img src={WebDesign} alt="web design" />
            </div>
            <h1 className="text-[24px] text-secondary mb-3 sm:text-[26px] md:text-[30px] font-extrabold leading-7 sm:leading-8 md:leading-9">
              <span className="text-primary">Web</span> Design
            </h1>
            <p className="text-[15px] text-secondary font-medium leading-7 lg:my-4">
              Web designing is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              ‘Content here, content here’, making it look like readable
              English.
            </p>
          </div>

          {/* cards */}
          <Cards />

          <p className="text-[15px] text-secondary font-medium leading-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text.
          </p>
          <h1 className="text-[24px] mb-3 sm:text-[26px] md:text-[30px] font-extrabold leading-7 sm:leading-8 md:leading-9">
            <span className="text-primary">Our Work</span> benefits
          </h1>
          <p className="text-[15px] font-medium leading-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text.
          </p>
          {/* Unordered list */}
          <ul className="list-none pl-0 leading-10">
            <li className="relative pl-6">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-primary">
                <TiTick />
              </span>
              Marketing options and rates
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-primary">
                <TiTick />
              </span>
              Research beyond the business
            </li>
            <li className="relative pl-6">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-primary">
                <TiTick />
              </span>
              The ability to turn around consulting
            </li>
            <li className="relative pl-6 ">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-primary ">
                <TiTick />
              </span>
              Customer engagement matters
            </li>
          </ul>

          {/* paragraph */}
          <p className="text-[15px] lg:text-[16px] font-medium leading-6 lg:leading-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
