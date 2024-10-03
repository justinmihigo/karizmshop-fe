import { FaStar } from "react-icons/fa";
import PlayIcon from "../assets/artistimage.png";
function Creatives() {
  const rating = 3;
  const totalStars = 5;
  return (
    <main>
      <div className="">
        <div className="">
          <div className="px-0 lg:px-10 md:px-10">
            <div className="mb-5">
              <p className="font-bold text-[25px] pl-10">Top Creatives</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-10 lg:gap-20 md:gap-20 lg:grid-cols-2">
              <div className="border shadow-lg rounded-lg pt-10 pb-10 bg-[#FFF4F4]">
                <div className="flex flex-row items-center justify-around mb-10">
                  <div className="h-[50px] w-[50px] rounded-[50px] items-center justify-center flex flex-col">
                    <button className="cursor-pointer outline-none  hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                      <img
                        src={PlayIcon}
                        alt=""
                        className="h-[45px] w-[45px] rounded-full lg:h-[50px]  md:w-[50px] object-fill"
                      />
                    </button>
                  </div>

                  <div>
                  <p className="font-bold text-[14px] lg:text-[20px]">
                      Mirrors
                    </p>
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">
                    justin Timberlake</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-col lg:flex-row md:flex-row">
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">4.5</p>
                      <div className="flex flex-row">
                        {Array.from({ length: totalStars }, (_, index) => (
                          <FaStar
                            key={index}
                            title={`star-${index + 1}`}
                            color={index < rating ? "#FACC15" : "#9CA3AF"}
                            className="text-[13px] lg:text-[20px] md:text-[20px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-0 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                    visit
                  </button>
                </div>
                <div className="flex flex-row items-center justify-around mb-10">
                  <div className="h-[50px] w-[50px] rounded-[50px] items-center justify-center flex flex-col  hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                    <button className="cursor-pointer outline-none">
                      <img
                        src={PlayIcon}
                        alt=""
                        className="h-[45px] w-[45px] rounded-full lg:h-[50px]  md:w-[50px] object-fill"
                      />
                    </button>
                  </div>

                  <div>
                  <p className="font-bold text-[14px] lg:text-[20px]">
                      Bon Appetit
                    </p>
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">
                    Fik Fameike</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-col lg:flex-row md:flex-row">
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">4.5</p>
                      <div className="flex flex-row">
                        {Array.from({ length: totalStars }, (_, index) => (
                          <FaStar
                            key={index}
                            title={`star-${index + 1}`}
                            color={index < rating ? "#FACC15" : "#9CA3AF"}
                            className="text-[13px] lg:text-[20px] md:text-[20px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-0 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                    visit
                  </button>
                </div>
                <div className="flex flex-row items-center justify-around mb-10">
                  <div className="h-[50px] w-[50px] rounded-[50px] items-center justify-center flex flex-col">
                    <button className="cursor-pointer outline-none">
                      <img
                        src={PlayIcon}
                        alt=""
                        className="h-[45px] w-[45px] rounded-full lg:h-[50px]  md:w-[50px] object-fill"
                      />
                    </button>
                  </div>

                  <div>
                  <p className="font-bold text-[14px] lg:text-[20px]">
                      Munda awo
                    </p>
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">
                    B2C</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-col lg:flex-row md:flex-row">
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">4.5</p>
                      <div className="flex flex-row">
                        {Array.from({ length: totalStars }, (_, index) => (
                          <FaStar
                            key={index}
                            title={`star-${index + 1}`}
                            color={index < rating ? "#FACC15" : "#9CA3AF"}
                            className="text-[13px] lg:text-[20px] md:text-[20px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-0 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                    visit
                  </button>
                </div>
                <div className="flex flex-row items-center justify-around mb-10">
                  <div className="h-[50px] w-[50px] rounded-[50px] items-center justify-center flex flex-col">
                    <button className="cursor-pointer outline-none  hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                      <img
                        src={PlayIcon}
                        alt=""
                        className="h-[45px] w-[45px] rounded-full lg:h-[50px]  md:w-[50px] object-fill"
                      />
                    </button>
                  </div>

                  <div>
                  <p className="font-bold text-[14px] lg:text-[20px]">
                      Sikikukweka
                    </p>
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">
                    Daddy Andre</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-col lg:flex-row md:flex-row">
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">4.5</p>
                      <div className="flex flex-row">
                        {Array.from({ length: totalStars }, (_, index) => (
                          <FaStar
                            key={index}
                            title={`star-${index + 1}`}
                            color={index < rating ? "#FACC15" : "#9CA3AF"}
                            className="text-[13px] lg:text-[20px] md:text-[20px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-0 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                    visit
                  </button>
                </div>
                <div className="flex flex-row items-center justify-around mb-10">
                  <div className="h-[50px] w-[50px] rounded-[50px] items-center justify-center flex flex-col">
                    <button className="cursor-pointer outline-none  hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                      <img
                        src={PlayIcon}
                        alt=""
                        className="h-[45px] w-[45px] rounded-full lg:h-[50px]  md:w-[50px] object-fill"
                      />
                    </button>
                  </div>

                  <div>
                  <p className="font-bold text-[14px] lg:text-[20px]">
                      Down Below
                    </p>
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">
                    Roddy Rich</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-col lg:flex-row md:flex-row">
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">4.5</p>
                      <div className="flex flex-row">
                        {Array.from({ length: totalStars }, (_, index) => (
                          <FaStar
                            key={index}
                            title={`star-${index + 1}`}
                            color={index < rating ? "#FACC15" : "#9CA3AF"}
                            className="text-[13px] lg:text-[20px] md:text-[20px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-0 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                    visit
                  </button>
                </div>
              </div>
              <div className="border shadow-lg rounded-lg pt-10 pb-10 bg-[#FFF4F4]">
                <div className="flex flex-row items-center justify-around mb-10">
                  <div className="h-[50px] w-[50px] rounded-[50px] items-center justify-center flex flex-col">
                    <button className="cursor-pointer outline-none  hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                      <img
                        src={PlayIcon}
                        alt=""
                        className="h-[45px] w-[45px] rounded-full lg:h-[50px]  md:w-[50px] object-fill"
                      />
                    </button>
                  </div>

                  <div>
                  <p className="font-bold text-[14px] lg:text-[20px]">
                      Mirrors
                    </p>
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">
                    justin Timberlake</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-col lg:flex-row md:flex-row">
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">4.5</p>
                      <div className="flex flex-row">
                        {Array.from({ length: totalStars }, (_, index) => (
                          <FaStar
                            key={index}
                            title={`star-${index + 1}`}
                            color={index < rating ? "#FACC15" : "#9CA3AF"}
                            className="text-[13px] lg:text-[20px] md:text-[20px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-0 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                    visit
                  </button>
                </div>
                <div className="flex flex-row items-center justify-around mb-10">
                  <div className="h-[50px] w-[50px] rounded-[50px] items-center justify-center flex flex-col">
                    <button className="cursor-pointer outline-none  hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                      <img
                        src={PlayIcon}
                        alt=""
                        className="h-[45px] w-[45px] rounded-full lg:h-[50px]  md:w-[50px] object-fill"
                      />
                    </button>
                  </div>
                  <div>
                  <p className="font-bold text-[14px] lg:text-[20px]">
                      Bon Appetit
                    </p>
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">
                    Fik Fameike</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-col lg:flex-row md:flex-row">
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">4.5</p>
                      <div className="flex flex-row">
                        {Array.from({ length: totalStars }, (_, index) => (
                          <FaStar
                            key={index}
                            title={`star-${index + 1}`}
                            color={index < rating ? "#FACC15" : "#9CA3AF"}
                            className="text-[13px] lg:text-[20px] md:text-[20px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-0 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                    visit
                  </button>
                </div>
                <div className="flex flex-row items-center justify-around mb-10">
                  <div className="h-[50px] w-[50px] rounded-[50px] items-center justify-center flex flex-col">
                    
                    <button className="cursor-pointer outline-none  hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                      <img
                        src={PlayIcon}
                        alt=""
                        className="h-[45px] w-[45px] rounded-full lg:h-[50px]  md:w-[50px] object-fill"
                      />
                    </button>
                  </div>

                  <div>
                  <p className="font-bold text-[14px] lg:text-[20px]">
                      Munda awo
                    </p>
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">
                    B2C</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-col lg:flex-row md:flex-row">
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">4.5</p>
                      <div className="flex flex-row">
                        {Array.from({ length: totalStars }, (_, index) => (
                          <FaStar
                            key={index}
                            title={`star-${index + 1}`}
                            color={index < rating ? "#FACC15" : "#9CA3AF"}
                            className="text-[13px] lg:text-[20px] md:text-[20px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-0 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                    visit
                  </button>
                </div>
                <div className="flex flex-row items-center justify-around mb-10">
                  <div className="h-[50px] w-[50px] rounded-[50px] items-center justify-center flex flex-col">
                    <button className="cursor-pointer outline-none  hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                      <img
                        src={PlayIcon}
                        alt=""
                        className="h-[45px] w-[45px] rounded-full lg:h-[50px] md:w-[50px] object-fill"
                      />
                    </button>
                  </div>

                  <div>
                    <p className="font-bold text-[14px] lg:text-[20px]">
                      Sikikukweka
                    </p>
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">Daddy Andre</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-col lg:flex-row md:flex-row">
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">4.5</p>
                      <div className="flex flex-row">
                        {Array.from({ length: totalStars }, (_, index) => (
                          <FaStar
                            key={index}
                            title={`star-${index + 1}`}
                            color={index < rating ? "#FACC15" : "#9CA3AF"}
                            className="text-[13px] lg:text-[20px] md:text-[20px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-0 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                    visit
                  </button>
                </div>
                <div className="flex flex-row items-center justify-around mb-10">
                  <div className="h-[50px] w-[50px] rounded-[50px] items-center justify-center flex flex-col">
                    <button className="cursor-pointer outline-none  hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
                      <img
                        src={PlayIcon}
                        alt=""
                        className="h-[45px] w-[45px] rounded-full lg:h-[50px]  md:w-[50px] object-fill"
                      />
                    </button>
                  </div>

                  <div>
                  <p className="font-bold text-[14px] lg:text-[20px]">
                      Down Below
                    </p>
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">
                    Roddy Rich</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-col lg:flex-row md:flex-row">
                    <p className="text-[13px] lg:text-[16px] md:text-[16px]">4.5</p>
                      <div className="flex flex-row">
                        {Array.from({ length: totalStars }, (_, index) => (
                          <FaStar
                            key={index}
                            title={`star-${index + 1}`}
                            color={index < rating ? "#FACC15" : "#9CA3AF"}
                            className="text-[13px] lg:text-[20px] md:text-[20px]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-0 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                    visit
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center mt-5">
            <button className="bg-[#1C4A93] justify-center rounded-lg outline-none cursor-pointer text-white text-[20px] px-10 py-3 font-bold  hover:text-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out">
              View all Creatives
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Creatives;
