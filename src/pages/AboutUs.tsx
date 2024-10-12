import whoare from "../assets/whoare.jpg"
function Aboutus() {
  return (
    <div className="bg-violeteBg">
      <div className="w-full overflow-hidden px-5 md:px-10 bg-violeteBg md:h-96 relative text-center">
        <h1 className="font-bold text-primary text-2xl md:text-3xl py-10 lg:px-60">
          We are Karizm.
        </h1>
        <p className="text-textBlack text-base lg:px-60">
          We are one of the leading Arts and Entertainment companies in East Africa. In everything we do, we are committed to your dream, artistry, innovation, and entrepreneurship. Established in 2017, we offer arts and creative business solutions. We own and operate a broad array of businesses engaged in events management, talent management, marketing, public relations, artist booking, film and digital music distribution, and ticketing solutions.
        </p>
      </div>

      <div className="text-center font-bold text-2xl md:text-3xl my-8 mb-1">
        Why Choose Us
      </div>

      <div className="md:flex justify-center items-center gap-10 py-10 px-5 md:px-16">
        <img
          src={whoare}
          alt="Who we are"
          className="w-full rounded-xl md:w-1/3 object-cover md:pl-8"
        />

        <div className="md:w-2/3 flex flex-col gap-8">
          <div>
            <h2 className="font-semibold text-lg md:text-xl">Mission</h2>
            <p className="mt-2 text-base md:text-lg">
              • To be the preferred and trusted arts and entertainment business solution provider in Africa.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg md:text-xl">Vision</h2>
            <p className="mt-2 text-base md:text-lg">
              • Nurturing, inspiring, integrity, respect, excellence, caring, and daring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;

