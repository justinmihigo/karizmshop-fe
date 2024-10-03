import Farmer from "../../../assets/farmer.svg"
import Export from "../../../assets/ExportIcon.svg"
import SalesImage from "../../../assets/SalesIcon.svg"
import OrderIcon from "../../../assets/OrderIcon.svg"
import DiscIcon from "../../../assets/DiscIcon.svg"
import AddPerson from "../../../assets/AddPeople.svg"
import BestSales from "../Table/BestSales"
import CategoryOrder from "../Table/CategoryOrder"
function ArtistDashHome() {

  function getGreeting(): string {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      return 'Good Morning';
    }
    if (hour < 18) {
      return 'Good Afternoon';
    }
    return 'Good Evening';
  }

  const greetings = getGreeting();


  return (
    <div>
      <div className="bg-dashgrey min-h-screen">
      <div className="rounded-md">
        <div className="md:flex items-center justify-between rounded-2xl bg-white p-4">
          <div>
            <p className="text-dashgreytext text-sm">{greetings}, </p>
            <div className="font-semibold text-2xl">
              Ambroise
            </div>
          </div>
          <div>
            <img src={Farmer} alt="farmer" />
          </div>
        </div>
          <>
            <div className="mt-4 p-5 rounded-2xl bg-white">
              <div className="flex items-center justify-between">
                <h1>Total Sales Available</h1>
                <button
                  className="border flex items-center px-2 py-1 rounded-md"
                  type="submit"
                >
                  <img src={Export} alt="Export" />
                  Export
                </button>
              </div>
              <p className="text-dashgreytext text-sm mb-7">Sales Summary</p>
              <div className="grid md:grid-cols-4 gap-2">
                <div className="bg-[#1C4A93] p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-xl font-semibold py-4">
                    <div className="bg-[#ccc] p-1 rounded-full w-8">
                      <img src={SalesImage} alt="Sales" />
                    </div>
                    <div>
                      <div className="font-bold text-white">40000$</div>
                    </div>
                  </div>
                  <div className="text-md font-medium text-white">
                    Total Sales
                  </div>
                  <p className="text-sm text-white">
                    All Products Sales
                  </p>
                </div>
                <div className="bg-[#1C4A93] p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-xl font-semibold py-4">
                    <div className="bg-[#ccc] p-1 rounded-full w-8">
                      <img src={OrderIcon} alt="Order" />
                    </div>
                    <div className="font-bold text-white">1000</div>
                  </div>
                  <div className="text-md font-medium text-white">
                    Total Order
                  </div>
                  <p className="text-sm text-white">All Orders </p>
                </div>
                <div className="bg-[#1C4A93] p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-xl font-semibold py-4">
                    <div className="bg-[#ccc] p-1 rounded-full w-8">
                      <img src={DiscIcon} alt="Product Sold" />
                    </div>
                    <div className="text-white font-bold">500</div>
                  </div>
                  <div className="text-md font-medium text-white">
                    Product Sold
                  </div>
                  <p className="text-sm text-white">
                    All Products Sold{' '}
                  </p>
                </div>
                <div className="bg-[#1C4A93] p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-xl font-semibold py-4">
                    <div className="bg-[#ccc] p-1 rounded-full">
                      <img src={AddPerson} alt="New Customers" />
                    </div>
                    <div>
     
                    </div>
                  </div>
                  <div className="text-md font-medium text-white">
                    New Customers
                  </div>
                  <p className="text-sm text-white">All Buyers</p>
                </div>
              </div>
            </div>
            <div className="w-full xs:flex-col lg:flex-row mt-4 flex items-center xs:gap-4 lg:gap-4">
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
            </div>
          </>
          <CategoryOrder/>

          <BestSales/>
      </div>
    </div>
    </div>

  );
}

export default ArtistDashHome;



