import { AttachMoneyRounded, AssignmentReturnRounded, LocalAtmRounded, MonetizationOnRounded } from "@mui/icons-material"
import TotalSalesCard from "../components/dashboard/Admin/CardSales"
import Export from "../assets/ExportIcon.svg"
import { BarChart, LineChart, PieChart } from "@mui/x-charts"
const SalesAnalytics = () => {
  return (
    <div className="bg-dashgrey min-h-screen">
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
        <p className="font-bold text-lg mb-7">Sales Summary</p>
        <div className="grid md:grid-cols-4 gap-6">
          <TotalSalesCard icon={<AttachMoneyRounded />} title={"Total Sales"} totalSales={"10000 UGX"} percentageChange={5} />
          <TotalSalesCard icon={<AssignmentReturnRounded />} title={"Total Returns in UGX"} totalSales={"200000 UGX"} percentageChange={-10} />
          <TotalSalesCard icon={<LocalAtmRounded />} title={"Total Profit"} totalSales={50} percentageChange={10} />
          <TotalSalesCard icon={<MonetizationOnRounded />} title={"Total Net Income"} totalSales={"200000 UGX"} percentageChange={25} />
        </div>
        
        <div id="report" className="my-10">
        <p className="font-bold text-lg mb-7">Monthly Report</p>
          <div className="grid md:grid-cols-3 gap-x-4">
            <div className="shadow-md p-4 rounded-xl">
              <h2 className="font-bold py-5">Best selling categories</h2>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 10, label: 'series A' },
                      { id: 1, value: 15, label: 'series B' },
                      { id: 2, value: 20, label: 'series C' },
                    ],
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -45,
                    endAngle: 225,

                  }

                ]}
                height={290}
              />
            </div>
            <div className="shadow-md p-4 rounded-xl">
              <h2 className="font-bold py-5">Profit among different products</h2>
              <BarChart
                 series={[
                  { data: [35, 44, 24, 34] },
                  { data: [51, 6, 49, 30] },
                  { data: [15, 25, 30, 50] },
                  { data: [60, 50, 15, 25] },
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              borderRadius={20}
              />
            </div>
            <div className="shadow-md p-4 rounded-xl">
              <h2 className="font-bold py-5">Sales Benchmarks on two last months</h2>
              <LineChart
                 series={[
                  { data: [35, 44, 24, 34], area:true },
                  { data: [51, 6, 49, 30], area:true },
                  
              ]}
              height={290}
              xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
              margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SalesAnalytics