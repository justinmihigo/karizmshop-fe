import Farmer from "../../../assets/farmer.svg"
import Export from "../../../assets/ExportIcon.svg"

function AdminDashHome() {

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


              </div>
            </div>
            <div className="w-full xs:flex-col lg:flex-row mt-4 flex items-center xs:gap-4 lg:gap-4">
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
            </div>
          </>

      </div>
    </div>
    </div>

  );
}

export default AdminDashHome;



