import Thriller from "../assets/Thriller.jpg";
import SOS from "../assets/SOSIMAGE.png";
import { FaStar } from "react-icons/fa";
import PlayIcon from "../assets/Polygon 1.png";
import artistimage from "../assets/artistimage.png";
function AlbumTrack() {
  const rating = 3;
  const totalStars = 5;
  return (
    <main>
      <div className="">
        <div className="mb-10">
        <div className="">
          <div className="mb-5">
          <p className="font-bold text-[25px] pl-10">New Releases</p>

          </div>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10  justify-between">
          {[
            {
              id: 1,
              imageSrc: Thriller,
              title: "Thriller",
              artist: "Michael Jackson",
              genre: "Rock, Pop",
              price: "10,000 UGX",
            },
            {
              id: 2,
              imageSrc: Thriller,
              title: "Thriller",
              artist: "Michael Jackson",
              genre: "Rock, Pop",
              price: "10,000 UGX",
            },
            {
              id: 3,
              imageSrc: artistimage,
              title: "Thriller",
              artist: "Michael Jackson",
              genre: "Rock, Pop",
              price: "10,000 UGX",
            },
            {
              id: 4,
              imageSrc: SOS,
              title: "Thriller",
              artist: "Michael Jackson",
              genre: "Rock, Pop",
              price: "10,000 UGX",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="rounded-lg w-full max-w-[350px] mx-auto h-auto cursor-pointer transition-transform transform active:scale-95 hover:scale-105 font-bold"
            >
              <button className="bg-[#15ABFF] pt-1 pb-1 rounded-[11px] text-white text-[12px] items-center justify-center absolute top-5 left-4 px-3 cursor-pointer transition-transform transform active:scale-95 hover:scale-105 font-bold outline-none">
                <p className="text-[12px] font-bold">Pop</p>
              </button>
              <div className="w-full h-[300px]">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-fill rounded-tl-[20px] rounded-tr-[20px]"
                />
              </div>
              <div className="bg-[#B9E5FF] p-5 rounded-bl-lg rounded-br-[20px]">
                <p className="text-[#000] text-[20px] font-bold mb-1">
                  {item.title}
                </p>
                <p className="text-[16px] mb-1">{item.artist}</p>
                <p className="text-[#9095A1] text-[12px] mb-1">
                  Genre: {item.genre}
                </p>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[16px] font-bold">4.5</p>
                  <div className="flex flex-row">
                    {Array.from({ length: totalStars }, (_, index) => (
                      <FaStar
                        key={index}
                        size="20"
                        color={index < rating ? "#FACC15" : "#9CA3AF"}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between mt-2">
                  <p className="text-[20px] font-bold">{item.price}</p>
                  <button className="bg-[#1C4A93] h-7 w-8 rounded-md text-white text-[20] cursor-pointer transition-transform transform active:scale-95 hover:scale-105 font-bold outline-none">
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>


        <div className="">
          <div className="mb-5">
            <p className="font-bold text-[25px] pl-10">Top Tracks</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-20  justify-between px-0 lg:px-10 md:px-10 lg:grid-cols-2">
            <div className="border shadow-lg rounded-lg pt-10 pb-10 bg-[#FFF4F4]">
              <div className="flex flex-row items-center justify-around mb-10">
                <button className="cursor-pointer outline-none">
                <img src={PlayIcon} alt="" className="w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] object-contain"/>

                </button>

                <div>
                  <p className="font-bold text-[17px] lg:text-[20px]">Mirrors</p>
                  <p className="text-[16]">justin Timberlake</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] lg:text-[20px]">500 UGX</p>
                </div>
                <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-1 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                  
                  buy
                </button>
              </div>
              <div className="flex flex-row items-center justify-around mb-10">
                <button className="cursor-pointer outline-none">
                <img src={PlayIcon} alt="" className="w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] object-contain"/>

                </button>

                <div>
                  <p className="font-bold text-[17px] lg:text-[20px]">Bon Appetit</p>
                  <p className="text-[16]">Fik Fameike</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] lg:text-[20px]">450 UGX</p>
                </div>
                <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-1 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                 
                  buy
                </button>
              </div>
              <div className="flex flex-row items-center justify-around mb-10">
                <button className="cursor-pointer outline-none">
                <img src={PlayIcon} alt="" className="w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] object-contain"/>

                </button>

                <div>
                  <p className="font-bold text-[17px] lg:text-[20px]">Munda awo</p>
                  <p className="text-[16]">B2C</p>
                </div>
                <div>
                <p className="font-bold text-[16px] lg:text-[20px]">500 UGX</p>
                </div>
                <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-1 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                 
                  buy
                </button>
              </div>
              <div className="flex flex-row items-center justify-around mb-10">
                <button className="cursor-pointer outline-none">
                <img src={PlayIcon} alt="" className="w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] object-contain"/>

                </button>

                <div>
                  <p className="font-bold text-[17px] lg:text-[20px]]">Sikikukweka</p>
                  <p className="text-[16]">Daddy Andre</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] lg:text-[20px]">500 UGX</p>
                </div>
                <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-1 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                 
                  buy
                </button>
              </div>
              <div className="flex flex-row items-center justify-around mb-10">
                <button className="cursor-pointer outline-none">
                <img src={PlayIcon} alt="" className="w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] object-contain"/>

                </button>

                <div>
                  <p className="font-bold text-[17px] lg:text-[20px]">Down Below</p>
                  <p className="text-[16]">Roddy Rich</p>
                </div>
                <div>
                <p className="font-bold text-[16px] lg:text-[20px]">500 UGX</p>
                </div>
                <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-1 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                  
                  buy
                </button>
              </div>
            </div>
            <div className="border shadow-lg rounded-lg pt-10 pb-10 bg-[#FFF4F4]">
              <div className="flex flex-row items-center justify-around mb-10">
                <button className="cursor-pointer outline-none">
                <img src={PlayIcon} alt="" className="w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] object-contain"/>

                </button>

                <div>
                  <p className="font-bold text-[17px] lg:text-[20px]">Mirrors</p>
                  <p className="text-[16]">justin Timberlake</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] lg:text-[20px]">500 UGX</p>
                </div>
                <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-1 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                  buy
                </button>
              </div>
              <div className="flex flex-row items-center justify-around mb-10">
                <button className="cursor-pointer outline-none">
                <img src={PlayIcon} alt="" className="w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] object-contain"/>

                </button>

                <div>
                  <p className="font-bold text-[17px] lg:text-[20px]">Bon Appetit</p>
                  <p className="text-[16]">Fik Fameike</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] lg:text-[20px]">450 UGX</p>
                </div>
                <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-1 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                 
                  buy
                </button>
              </div>
              <div className="flex flex-row items-center justify-around mb-10">
                <button className="cursor-pointer outline-none">
                <img src={PlayIcon} alt="" className="w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] object-contain"/>

                </button>

                <div>
                  <p className="font-bold text-[17px] lg:text-[20px]">Munda awo</p>
                  <p className="text-[16]">B2C</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] lg:text-[20px]">500 UGX</p>
                </div>
               
               <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-1 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                 
                  buy
                </button>
              </div>
              <div className="flex flex-row items-center justify-around mb-10">
                <button className="cursor-pointer outline-none">
                <img src={PlayIcon} alt="" className="w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] object-contain"/>

                </button>

                <div>
                  <p className="font-bold text-[17px] lg:text-[20px]">Sikikukweka</p>
                  <p className="text-[16]">Daddy Andre</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] lg:text-[20px]">500 UGX</p>
                </div>
                <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-1 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                 
                  buy
                </button>
              </div>
              <div className="flex flex-row items-center justify-around mb-10">
                <button className="cursor-pointer outline-none">
                  <img src={PlayIcon} alt="" className="w-[40px] h-[40px] lg:h-[60px] lg:w-[60px] object-contain"/>
                </button>

                <div>
                  <p className="font-bold text-[17px] lg:text-[20px]">Down Below</p>
                  <p className="text-[16]">Roddy Rich</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] lg:text-[20px]">500 UGX</p>
                </div>
                <button className="bg-[#1C4A93]  justify-center rounded-md outline-none cursor-pointer text-white text-[20] py-1 px-3 lg:px-5 lg:py-2 hover:scale-105 transition-all duration-300 ease-in-out">
                  buy
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center mt-5">
            <button className="bg-[#1C4A93] justify-center rounded-lg outline-none cursor-pointer text-white text-[20px] px-10 py-3 font-bold hover:scale-105 transition-all duration-300 ease-in-out">
              View all tracks
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default AlbumTrack;
