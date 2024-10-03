import { useState, useEffect } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import HelloImage from '../../assets/welcome.png';
import HelloImage1 from '../../assets/welcome1.jpg';
import HelloImage2 from '../../assets/welcome2.png';

interface SlideProps {
  title: string;
  mainText: string;
  img: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const slides: SlideProps[] = [
  {
    title: 'Discover Unique Collections🎶',
    mainText: 'Exclusive Music Albums, Singles, & Merchandise',
    img: HelloImage,
  },
  {
    title: 'Empower Your Creativity📚',
    mainText: 'Books, Coaching Materials, & Digital Media',
    img: HelloImage1,
  },
  {
    title: 'Support Your Favorite Artists💖',
    mainText: 'Direct Donations & Exclusive Fan Merchandise',
    img: HelloImage2,
  },
];

function Slide({ slide, isActive }: { slide: SlideProps; isActive: boolean }) {
  return (
    <div
      className={`w-full h-auto flex flex-col p-2 gap-10 bg-white lg:flex-row lg:p-5 md:p-5 md:flex-row ${isActive ? 'animate-slide-up' : ''}`}
    >
      <div className="w-full pl-0 pt-1 md:w-1/2 flex h-auto flex-col flex-1 lg:pl-10 md:pl-0 lg:pt-10 md:pt-10">
        <h2 className="flex justify-center text-[#171A1F] text-[18px] mb-4 lg:justify-start items-start">
          {slide.title}
        </h2>
        <div className='w-[85%]'>
          <p className="text-[48px]  text-[#1C4A93] font-bold items-center md:text-[40px] lg:justify-start lg:items-start">
            {slide.mainText}
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2 h-auto flex-1 lg:flex md:flex ">
        <img
          src={slide.img}
          alt={`Slide Images - ${slide.title}`}
          className="h-full"
        />
      </div>
    </div>
  );
}


function HelloSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={`slide-${slide.title}-${index}`} className="min-w-full">
            <Slide slide={slide} isActive={index === currentIndex} />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        type="button"
        className="absolute top-1/2 left-[-19px] transform -translate-y-1/2 p-4 outline-none font-bold text-[14px] lg:left-[-10px] md:left-[-10px] lg:font-bold lg:text-[20px] md:font-bold md:text-[20px]"
        title="Previous Slide"
        aria-label="Previous Slide"
      >
        <SlArrowLeft />
      </button>
      <button
        onClick={handleNext}
        type="button"
        className="absolute top-1/2 right-[-19px] transform -translate-y-1/2 p-4 outline-none font-bold text-[14px] lg:right-[-10px] md:right-[-10px] lg:font-bold lg:text-[20px] md:font-bold md:text-[20px]"
        title="Next Slide"
        aria-label="Next Slide"
      >
        <SlArrowRight />
      </button>
      <div className="relative bottom-[0] left-1/2 transform -translate-x-1/2 space-x-2 p-5 flex flex-row justify-center items-center">
        {slides.map((_, index) => (
          <div
            key={`indicator-${index}`}
            className={`w-4 h-4 rounded-full cursor-pointer ${currentIndex === index ? 'bg-[#1C4A93]' : 'bg-[#ffffff] border border-black'}`}
            data-testid={`active-indicator-${index}`}
            aria-label={`Slide indicator ${index + 1}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HelloSection;
