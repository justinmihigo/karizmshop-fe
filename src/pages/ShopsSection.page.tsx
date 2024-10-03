import { FaStar } from "react-icons/fa";
import Shop1 from "../assets/shop1.webp";
import Shop2 from "../assets/shop2.webp";
import Shop3 from "../assets/shop3.webp";
import Shop5 from "../assets/shop4.webp";

function ShopsSection() {
  const rating = 3;
  const totalStars = 5;
  return (
    <main>
      <div className="mt-10">
        <div className="px-0 lg:px-10 md:px-10">
          <div className="">
            <p className="font-bold text-[25px] pl-10 mb-5">Featured shops</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-20">
            <div className="rounded-xl   shadow-xl bg-[#FFF4F4] border cursor-pointer">
              <button className="bg-[#15ABFF]  pt-1 pb-1 rounded-[11px] text-white text-[12] items-center justify-center relative top-5 left-4 px-2">
                <p className="text-[12px] items-center justify-center">
                  fashion
                </p>
              </button>
              <div className="w-full h-240">
                <img
                  src={Shop1}
                  alt=""
                  className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="p-5 rounded-bl-lg rounded-br-lg">
                <div className="items-center justify-center w-full flex flex-col ">
                  <p className="text-[16px] mb-2">Appetite Shop</p>
                </div>
                <p className="text-[#9095A1] text-[12px] mb-2">
                  specializing in Arts and Fashion
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[16px] font-bold">4.5</p>
                  <div className="flex flex-row">
                    {Array.from({ length: totalStars }, (_, index) => (
                      <FaStar
                        key={index}
                        title={`star-${index + 1}`}
                        size="20"
                        color={index < rating ? "#FACC15" : "#9CA3AF"}
                      />
                    ))}
                  </div>
                </div>
                <div className="items-center justify-center  w-full flex flex-col ">
                  <button className="bg-[#1C4A93] px-10 py-2 justify-center rounded-md outline-none cursor-pointer text-white text-[20] hover:scale-105 transition-all duration-300 ease-in-out">
                    Visit
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl   shadow-xl bg-[#FFF4F4] border cursor-pointer">
              <button className="bg-[#15ABFF]  pt-1 pb-1 rounded-[11px] text-white text-[12] items-center justify-center relative top-5 left-4 px-2">
                <p className="text-[12px] items-center justify-center">Music</p>
              </button>
              <div className="w-full h-240">
                <img
                  src={Shop2}
                  alt=""
                  className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="p-5 rounded-bl-lg rounded-br-lg">
                <div className="items-center justify-center w-full flex flex-col ">
                  <p className="text-[16px] mb-2">Petpeutic</p>
                </div>
                <p className="text-[#9095A1] text-[12px] mb-2">
                  specializing in Music Production
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[16px] font-bold">4.5</p>
                  <div className="flex flex-row">
                    {Array.from({ length: totalStars }, (_, index) => (
                      <FaStar
                        key={index}
                        title={`star-${index + 1}`}
                        size="20"
                        color={index < rating ? "#FACC15" : "#9CA3AF"}
                      />
                    ))}
                  </div>
                </div>
                <div className="items-center justify-center  w-full flex flex-col ">
                  <button className="bg-[#1C4A93] px-10 py-2 justify-center rounded-md outline-none cursor-pointer text-white text-[20] hover:scale-105 transition-all duration-300 ease-in-out">
                    Visit
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl   shadow-xl bg-[#FFF4F4] border cursor-pointer">
              <button className="bg-[#15ABFF]  pt-1 pb-1 rounded-[11px] text-white text-[12] items-center justify-center relative top-5 left-4 px-2">
                <p className="text-[12px] items-center justify-center">Arts</p>
              </button>
              <div className="w-full h-240">
                <img
                  src={Shop3}
                  alt=""
                  className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="p-5 rounded-bl-lg rounded-br-lg">
                <div className="items-center justify-center w-full flex flex-col ">
                  <p className="text-[16px] mb-2">Fosterr Shop</p>
                </div>
                <p className="text-[#9095A1] text-[12px] mb-2">
                  specializing in Arts and Music
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[16px] font-bold">4.5</p>
                  <div className="flex flex-row">
                    {Array.from({ length: totalStars }, (_, index) => (
                      <FaStar
                        key={index}
                        title={`star-${index + 1}`}
                        size="20"
                        color={index < rating ? "#FACC15" : "#9CA3AF"}
                      />
                    ))}
                  </div>
                </div>
                <div className="items-center justify-center  w-full flex flex-col ">
                  <button className="bg-[#1C4A93] px-10 py-2 justify-center rounded-md outline-none cursor-pointer text-white text-[20] hover:scale-105 transition-all duration-300 ease-in-out">
                    Visit
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-xl   shadow-xl bg-[#FFF4F4] border cursor-pointer">
              <button className="bg-[#15ABFF]  pt-1 pb-1 rounded-[11px] text-white text-[12] items-center justify-center relative top-5 left-4 px-2">
                <p className="text-[12px] items-center justify-center">
                  Cosmetics
                </p>
              </button>
              <div className="w-full h-240">
                <img
                  src={Shop5}
                  alt=""
                  className="w-full h-full object-cover rounded-tl-md rounded-tr-md"
                />
              </div>
              <div className="p-5 rounded-bl-lg rounded-br-lg">
                <div className="items-center justify-center w-full flex flex-col ">
                  <p className="text-[16px] mb-2">Cosm Shop</p>
                </div>
                <p className="text-[#9095A1] text-[12px] mb-2">
                  specializing in cossmetics
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-[16px] font-bold">4.5</p>
                  <div className="flex flex-row">
                    {Array.from({ length: totalStars }, (_, index) => (
                      <FaStar
                        key={index}
                        title={`star-${index + 1}`}
                        size="20"
                        color={index < rating ? "#FACC15" : "#9CA3AF"}
                      />
                    ))}
                  </div>
                </div>
                <div className="items-center justify-center  w-full flex flex-col ">
                  <button className="bg-[#1C4A93] px-10 py-2 justify-center rounded-md outline-none cursor-pointer text-white text-[20] hover:scale-105 transition-all duration-300 ease-in-out">
                    Visit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mt-5 mb-10">
        <button className="bg-[#1C4A93] justify-center rounded-lg outline-none cursor-pointer text-white text-[20px] px-10 py-3 font-bold  transition-transform transform active:scale-95 hover:scale-105">
          View all shops
        </button>
      </div>
    </main>
  );
}
export default ShopsSection;
