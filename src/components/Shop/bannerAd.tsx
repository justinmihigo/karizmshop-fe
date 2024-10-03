import { ArrowRightAltOutlined } from "@mui/icons-material";
import { useRef, useEffect } from "react";
import main from "../../assets/main.png"
const BannerAd = () => {
  const scrollRef = useRef<any>(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
  
      let scrollPosition = 0;
      const scroll = () => {
        scrollPosition += 1;
        if (scrollPosition > scrollWidth - clientWidth) {
          scrollPosition = 0;
        }
        scrollContainer.scrollTo(scrollPosition, 0);
      };
  
      const intervalId = setInterval(scroll, 50);
  
      return () => clearInterval(intervalId);
    }
  }, []);
  const bannerData = [
    {
      title: "African Extracts Rooibos beauty",
      subtitle: "Use It Every Day",
    },
    {
      title: "New Skincare Collection",
      subtitle: "Revitalize Your Skin",
    },
    // Add more banner items as needed
  ];

  return (
    <div 
      ref={scrollRef} 
      className="whitespace-nowrap overflow-x-hidden" 
      style={{ scrollBehavior: 'smooth' }}
    >
      {bannerData.map((banner, index) => (
        <div key={index} className="inline-block w-full sm:w-[60%] pr-4">
          <div className="bg-[#B9E5FF50] flex flex-col sm:flex-row justify-between p-4 rounded-xl">
            <div className="flex flex-col gap-y-4 pl-4">
              <span className="text-secondary">New product</span>
              <p className="font-bold w-full sm:w-[50%]">{banner.title}</p>
              <p>{banner.subtitle}</p>
              <a 
                role="button" 
                href="#" 
                className="w-full sm:w-[60%] border-[1px] bg-white rounded-full p-2 px-3 text-center sm:text-left"
              >
                Shop Now <ArrowRightAltOutlined />
              </a>
            </div>
            <div className="w-full sm:w-[300px] h-[200px] mt-4 sm:mt-0">
              <img src={main} alt="main" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default BannerAd