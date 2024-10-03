import { useState } from "react";
import Category1 from "../assets/artistimage.png";
import Category2 from "../assets/artistimage.png";
import Category3 from "../assets/artistimage.png";
import Category4 from "../assets/artistimage.png";
import Category5 from "../assets/artistimage.png";
import SkinRosher from "../assets/skinrosher.png";
import NaturalImage from "../assets/Thronesmage.png";
import { HiArrowLongRight } from "react-icons/hi2";

const categories = [
  { img: Category1, name: "Music" },
  { img: Category2, name: "Books" },
  { img: Category3, name: "Courses" },
  { img: Category4, name: "Arts" },
  { img: Category5, name: "Fashion" },
];

function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="w-full overflow-hidden">
      <div className="p-6">
        <div className="">
          <div className="">
            <p className="font-bold text-[25px] pl-10 mb-5">
              Explore More Categories
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:grid-cols-5 lg:gap-20 md:gap-20">
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="border rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                  <img
                    src={category.img}
                    alt={category.name}
                    className="w-24 h-24 rounded-full mb-4"
                  />
                  <p className="font-bold text-center">{category.name}</p>
                </div>
                {hoveredIndex === index && (
                  <button
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg transition-all duration-300 ease-in-out"
                    style={{ zIndex: 10 }}
                  >
                    View more
                    <HiArrowLongRight className="text-2xl" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="px-6">
        <div className="bg-[#B9E5FF] p-6 my-5 rounded-[20px]">
          <div className="items-center justify-center">
            <p className="flex flex-col items-center justify-center text-[20px] font-bold py-5 pb-10">
              Everything you need to showcase and sell your creations
            </p>
          </div>

          <div className="flex flex-col justify-around items-center pb-10 lg:flex-row md:flex-row gap-5">
            <button className="bg-[#1C4A93] w-[100%]  rounded-lg text-white font-bold py-4 outline-none  bg-primary flex justify-center items-center gap-2 text-sm hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out lg:w-[25%] md:w-[25%]">
              <p className="text-[15px] md:text-[15px] lg:text-[20px]">
                Create your own shop
              </p>
            </button>
            <button className="bg-[#1C4A93] w-[100%]  rounded-lg text-white font-bold py-4 outline-none text-[20px] bg-primary flex justify-center items-center gap-2 text-sm hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out lg:w-[25%] md:w-[25%]">
              <p className="text-[15px] md:text-[15px] lg:text-[20px]">
                Upload your music
              </p>
            </button>
            <button className="bg-[#1C4A93] w-[100%]  rounded-lg text-white font-bold py-4 outline-none text-[20px] bg-primary flex justify-center items-center gap-2 text-sm hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out lg:w-[25%] md:w-[25%]">
              <p className="text-[15px] md:text-[15px] lg:text-[20px]">
                Manage your creations
              </p>
            </button>
          </div>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-2 lg:gap-10 md:gap-10">
            <div className="flex flex-row lg:flex-row gap-3 md:flex-row bg-[#B9E5FF] justify-between px-5 py-5 rounded-[20px] lg:px-10 md:px-10">
              <div>
                <p className="text-[#1C4A93] text-[14px] mt-2 font-medium mb-1">
                  New Product
                </p>
                <p className="text-[#000000] w-[100%] font-semibold text-[14px] lg:w-[70%] md:w-[70%] lg:text[22px]">
                  African Extracts Rooibos beauty
                </p>
                <p className="text-[#424856] text-[12px] py-2">
                  Use It Every Day
                </p>
                <div>
                  <button className="flex flex-row items-center outline-none cursor-pointer gap-2 border border-[#D9D9D9] bg-[#ffffff] px-2 py-2 rounded-[17px] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    <p className="text-[12px] font-medium">Shop Now</p>
                    <HiArrowLongRight />
                  </button>
                </div>
              </div>

              <div>
                <img
                  src={SkinRosher}
                  alt=""
                  className="w-[248px] h-[193px] object-cover rounded-[10px]"
                />
              </div>
            </div>
            <div className="flex flex-row lg:flex-row gap-3 md:flex-row bg-[#B9E5FF] justify-between px-5 py-5 rounded-[20px] lg:px-10 md:px-10">
              <div>
                <p className="text-[#1C4A93] text-[14px] mt-2 font-medium mb-1">
                  New Product
                </p>
                <p className="text-[#000000] w-[100%] font-semibold text-[14px] lg:w-[70%] md:w-[70%] lg:text[22px]">
                  African Extracts Rooibos beauty
                </p>
                <p className="text-[#424856] text-[12px] py-2">
                  Use It Every Day
                </p>
                <div>
                  <button className="flex flex-row items-center outline-none cursor-pointer gap-2 border border-[#D9D9D9] bg-[#ffffff] px-2 py-2 rounded-[17px] hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    <p className="text-[12px] font-medium">Shop Now</p>
                    <HiArrowLongRight />
                  </button>
                </div>
              </div>

              <div>
                <img
                  src={NaturalImage}
                  alt=""
                  className="w-[248px] h-[193px] object-cover rounded-[10px]"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Categories;
