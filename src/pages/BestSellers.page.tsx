import { useState } from "react";
import bestsellerImage1 from "../assets/book1.png";
import bestsellerImage2 from "../assets/book2.png";
import bestsellerImage3 from "../assets/book3.png";
import bestsellerImage4 from "../assets/book4.png";
import bestsellerImage5 from "../assets/book5.png";
import bestsellerImage6 from "../assets/book6.png";
import bestsellerMisic1 from "../assets/music1.png";
import bestsellerMisic2 from "../assets/music2.png";
import bestsellerMusic3 from "../assets/music3.png";
import bestsellerMusic4 from "../assets/music4.png";
import bestsellerMusic5 from "../assets/music5.png";
import bestsellerMusic6 from "../assets/music6.png";
import bestsellerMusic7 from "../assets/music7.png";

import { HiArrowLongRight } from "react-icons/hi2";

// Best Sellers in Books data
const BestSellersgroupBooks = [
  { img: bestsellerImage1, name: "Music" },
  { img: bestsellerImage2, name: "Books" },
  { img: bestsellerImage3, name: "Courses" },
  { img: bestsellerImage4, name: "Arts" },
  { img: bestsellerImage5, name: "Fashion" },
  { img: bestsellerImage6, name: "Fashion" },
  { img: bestsellerImage6, name: "Fashion" },
];

// Best Sellers in Music data
const BestSellersgroupMusic = [
  { img: bestsellerMisic1, name: "Pop" },
  { img: bestsellerMisic2, name: "Rock" },
  { img: bestsellerMusic3, name: "Jazz" },
  { img: bestsellerMusic4, name: "Classical" },
  { img: bestsellerMusic5, name: "Hip Hop" },
  { img: bestsellerMusic6, name: "Electronic" },
  { img: bestsellerMusic7, name: "Reggae" },
];

function BestSellers() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndexInmusic, setHoveredIndexInmusic] = useState<number | null>(null);


  return (
    <main className="w-full overflow-hidden">
      {/* Best Sellers in Books Section */}
      <div className="px-6">
      <div className="bg-[#B9E5FF] p-6 my-10 rounded-[20px] mb-10">
        <div className="">
          <p className="font-bold text-[25px] pl-10 mb-5">Best Sellers In Books</p>
        </div>

        <div>
        <div className="grid grid-cols-2 gap-5  md:grid-cols-5 lg:grid-cols-7 lg:gap-10 md:gap-10">

            {BestSellersgroupBooks.map((bestsellersgroup, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out ">
                  <img
                    src={bestsellersgroup.img}
                    alt={bestsellersgroup.name}
                    className="w-[180px] h-[193px] object-cover rounded-lg"
                  />

                  {/* Name appears on top of the image when hovered */}
                  {hoveredIndex === index && (
                    <div className="absolute top-0 left-0 w-full text-white p-2 text-center transition-opacity duration-300 ease-in-out bg-black bg-opacity-50">
                      <p className="font-bold text-[20px] z-10">{bestsellersgroup.name}</p>
                    </div>
                  )}
                </div>

                {/* Conditionally display the button on hover */}
                {hoveredIndex === index && (
                  <button
                  className="absolute inset-0 flex items-center justify-center text-[#fff] rounded-lg transition-all duration-300 ease-in-out font-bold text-[20px] bg-black bg-opacity-50"

                    style={{ zIndex: 10 }}
                  >
                    Shop Now
                    <HiArrowLongRight className="text-2xl ml-2" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Sellers in Music Section */}
      <div className="bg-[#B9E5FF] p-6 my-10 rounded-[20px] mb-10">
        <div className="">
          <p className="font-bold text-[25px] pl-10 mb-5">Best Sellers In Music</p>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-5  md:grid-cols-5 lg:grid-cols-7 lg:gap-10 md:gap-10">
            {BestSellersgroupMusic.map((bestsellersgroup, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndexInmusic(index)}
                onMouseLeave={() => setHoveredIndexInmusic(null)}
              >
                <div className="relative flex flex-col items-center justify-center hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out ">
                  <img
                    src={bestsellersgroup.img}
                    alt={bestsellersgroup.name}
                    className="w-[180px] h-[193px] object-cover rounded-lg"
                  />

                  {/* Name appears on top of the image when hovered */}
                  {hoveredIndexInmusic === index && (
                    <div className="absolute top-0 left-0 w-full text-white p-2 text-center transition-opacity duration-300 ease-in-out bg-black bg-opacity-50">
                      <p className="font-bold text-[20px] z-10">{bestsellersgroup.name}</p>
                    </div>
                  )}
                </div>

                {/* Conditionally display the button on hover */}
                {hoveredIndexInmusic === index && (
                  <button
                    className="absolute inset-0 flex items-center justify-center text-[#fff] rounded-lg transition-all duration-300 ease-in-out font-bold text-[20px] bg-black bg-opacity-50"
                    style={{ zIndex: 10 }}
                  >
                    Shop Now
                    <HiArrowLongRight className="text-2xl ml-2" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

    </main>
  );
}

export default BestSellers;
