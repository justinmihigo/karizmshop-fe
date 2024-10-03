import { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
type Status = "Pending" | "Shipping" | "Paid" | "Cancelled" | "Completed";

interface Order {
  id: number;
  order: string;
  date: string;
  status: Status;
  total: string;
}

const orders: Order[] = [
  {
    id: 142,
    order: "#234 John Does",
    date: "Jun 06, 2024",
    status: "Pending",
    total: "240,580",
  },
  {
    id: 254,
    order: "#254 Alice Mutoni",
    date: "June 01, 2024",
    status: "Shipping",
    total: "540,000",
  },
  {
    id: 423,
    order: "#423 Leo Rurangwa",
    date: "May 29, 2024",
    status: "Paid",
    total: "415,000",
  },
  {
    id: 762,
    order: "#762 Mihigo Justine",
    date: "May 24, 2024",
    status: "Cancelled",
    total: "389,000",
  },
  {
    id: 823,
    order: "#823 Mr Dorothy",
    date: "May 22, 2024",
    status: "Completed",
    total: "125,000",
  },
  {
    id: 324,
    order: "#324 Julia Kamanzi",
    date: "June 12, 2024",
    status: "Completed",
    total: "765,300",
  },
  {
    id: 454,
    order: "#454 Ben Kabera",
    date: "June 10, 2024",
    status: "Pending",
    total: "895,000",
  },
  {
    id: 555,
    order: "#555 Amy Niyonsaba",
    date: "June 08, 2024",
    status: "Paid",
    total: "302,600",
  },
  {
    id: 123,
    order: "#123 David Habimana",
    date: "June 05, 2024",
    status: "Cancelled",
    total: "152,700",
  },
  {
    id: 672,
    order: "#672 Christine Umutoni",
    date: "June 03, 2024",
    status: "Shipping",
    total: "950,000",
  },
  {
    id: 789,
    order: "#789 James Mugabo",
    date: "May 28, 2024",
    status: "Paid",
    total: "645,900",
  },
  {
    id: 987,
    order: "#987 Joan Nyiramatwi",
    date: "May 20, 2024",
    status: "Completed",
    total: "450,200",
  },
  {
    id: 765,
    order: "#765 Patrick Ngabo",
    date: "May 18, 2024",
    status: "Shipping",
    total: "560,500",
  },
  {
    id: 890,
    order: "#890 Sylvie Ingabire",
    date: "May 16, 2024",
    status: "Cancelled",
    total: "110,900",
  },
  {
    id: 321,
    order: "#321 Rachel Niyitegeka",
    date: "May 14, 2024",
    status: "Completed",
    total: "220,400",
  },
  {
    id: 111,
    order: "#111 Oliver Nkurunziza",
    date: "May 12, 2024",
    status: "Pending",
    total: "875,000",
  },
  {
    id: 222,
    order: "#222 Henry Karangwa",
    date: "May 10, 2024",
    status: "Shipping",
    total: "499,200",
  },
  {
    id: 333,
    order: "#333 Esther Mugisha",
    date: "May 08, 2024",
    status: "Paid",
    total: "799,300",
  },
  {
    id: 444,
    order: "#444 Florence Mbonyintege",
    date: "May 06, 2024",
    status: "Cancelled",
    total: "289,000",
  },
  {
    id: 555,
    order: "#555 Xavier Nkusi",
    date: "May 04, 2024",
    status: "Completed",
    total: "380,500",
  },
  {
    id: 142,
    order: "#234 John Does",
    date: "Jun 06, 2024",
    status: "Pending",
    total: "240,580",
  },
  {
    id: 254,
    order: "#254 Alice Mutoni",
    date: "June 01, 2024",
    status: "Shipping",
    total: "540,000",
  },
  {
    id: 423,
    order: "#423 Leo Rurangwa",
    date: "May 29, 2024",
    status: "Paid",
    total: "415,000",
  },
  {
    id: 762,
    order: "#762 Mihigo Justine",
    date: "May 24, 2024",
    status: "Cancelled",
    total: "389,000",
  },
  {
    id: 823,
    order: "#823 Mr Dorothy",
    date: "May 22, 2024",
    status: "Completed",
    total: "125,000",
  },
  {
    id: 324,
    order: "#324 Julia Kamanzi",
    date: "June 12, 2024",
    status: "Completed",
    total: "765,300",
  },
  {
    id: 454,
    order: "#454 Ben Kabera",
    date: "June 10, 2024",
    status: "Pending",
    total: "895,000",
  },
  {
    id: 555,
    order: "#555 Amy Niyonsaba",
    date: "June 08, 2024",
    status: "Paid",
    total: "302,600",
  },
  {
    id: 123,
    order: "#123 David Habimana",
    date: "June 05, 2024",
    status: "Cancelled",
    total: "152,700",
  },
  {
    id: 672,
    order: "#672 Christine Umutoni",
    date: "June 03, 2024",
    status: "Shipping",
    total: "950,000",
  },
  {
    id: 789,
    order: "#789 James Mugabo",
    date: "May 28, 2024",
    status: "Paid",
    total: "645,900",
  },
  {
    id: 987,
    order: "#987 Joan Nyiramatwi",
    date: "May 20, 2024",
    status: "Completed",
    total: "450,200",
  },
  {
    id: 765,
    order: "#765 Patrick Ngabo",
    date: "May 18, 2024",
    status: "Shipping",
    total: "560,500",
  },
  {
    id: 890,
    order: "#890 Sylvie Ingabire",
    date: "May 16, 2024",
    status: "Cancelled",
    total: "110,900",
  },
  {
    id: 321,
    order: "#321 Rachel Niyitegeka",
    date: "May 14, 2024",
    status: "Completed",
    total: "220,400",
  },
  {
    id: 111,
    order: "#111 Oliver Nkurunziza",
    date: "May 12, 2024",
    status: "Pending",
    total: "875,000",
  },
  {
    id: 222,
    order: "#222 Henry Karangwa",
    date: "May 10, 2024",
    status: "Shipping",
    total: "499,200",
  },
  {
    id: 333,
    order: "#333 Esther Mugisha",
    date: "May 08, 2024",
    status: "Paid",
    total: "799,300",
  },
  {
    id: 444,
    order: "#444 Florence Mbonyintege",
    date: "May 06, 2024",
    status: "Cancelled",
    total: "289,000",
  },
  {
    id: 555,
    order: "#555 Xavier Nkusi",
    date: "May 04, 2024",
    status: "Completed",
    total: "380,500",
  },
];

const statuses: Record<Status, string> = {
  Pending:
    "bg-yellow text-white h-10 w-20 flex items-center justify-center rounded-md",
  Shipping:
    "bg-blue text-white h-10 w-20 flex items-center justify-center rounded-md",
  Paid: "bg-green text-white h-10 w-20 flex items-center justify-center rounded-md",
  Cancelled:
    "bg-red text-white h-10 w-20 flex items-center justify-center rounded-md",
  Completed:
    "bg-green text-white h-10 w-25 flex items-center justify-center rounded-md",
};

const OrdersTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const ordersPerPage = 5;

  // Filter orders based on search input
  const filteredOrders = orders.filter(
    (order) =>
      order.order.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = filteredOrders.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  // Count orders by status
  const totalOrders = orders.length;
  const totalPending = orders.filter(
    (order) => order.status === "Pending"
  ).length;
  const totalShipping = orders.filter(
    (order) => order.status === "Shipping"
  ).length;
  const totalCancelled = orders.filter(
    (order) => order.status === "Cancelled"
  ).length;
  const totalCompleted = orders.filter(
    (order) => order.status === "Completed"
  ).length;

  return (
    <section className="mx-auto p-6 font-mono w-full">
      {/* Order Summary */}
      <div className="mb-6 grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-[#1C4A93] p-4 rounded-lg text-center">
          <h3 className="font-bold text-lg text-white">All Orders</h3>
          <p className="text-xl text-white">{totalOrders}</p>
        </div>
        <div className="bg-[#1C4A93] p-4 rounded-lg text-center">
          <h3 className="font-bold text-lg text-white">Pending</h3>
          <p className="text-xl text-white">{totalPending}</p>
        </div>
        <div className="bg-[#1C4A93] p-4 rounded-lg text-center">
          <h3 className="font-bold text-white text-lg">Shipping</h3>
          <p className="text-xl text-white">{totalShipping}</p>
        </div>
        <div className="bg-[#1C4A93] p-4 rounded-lg text-center">
          <h3 className="font-bold text-lg text-white">Cancelled</h3>
          <p className="text-xl text-white">{totalCancelled}</p>
        </div>
        <div className="bg-[#1C4A93] p-4 rounded-lg text-center">
          <h3 className="font-bold text-lg text-white">Completed</h3>
          <p className="text-xl text-white">{totalCompleted}</p>
        </div>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg pr-10"
          placeholder="Search orders by name or status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IoIosSearch className="absolute text-[25px] right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-gray-900 bg-gray-100 uppercase border-b border-gray-200">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Order</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Total</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentOrders.length > 0 ? (
                currentOrders.map((order) => (
                  <tr className="text-gray-700" key={order.id}>
                    <td className="px-4 py-3 border-b">{order.id}</td>
                    <td className="px-4 py-3 border-b">{order.order}</td>
                    <td className="px-4 py-3 border-b">{order.date}</td>
                    <td className="px-4 py-3 border-b">
                      <span
                        className={`inline-block w-24 h-8 ${
                          statuses[order.status]
                        } text-center py-2 rounded-full`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b">{order.total}</td>
                    <td className="px-4 py-3 border-b">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue hover:text-blue text-[20px] cursor-pointer">
                          <MdModeEdit />
                        </button>
                        <button className="text-red hover:text-red-700 cursor-pointer">
                          <MdDelete className="text-red font-bold text-[20px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-3 border-b" colSpan={6}>
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600">
            Showing {indexOfFirstOrder + 1} to{" "}
            {Math.min(indexOfLastOrder, filteredOrders.length)} of{" "}
            {filteredOrders.length} orders
          </div>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-md outline-none ${
                  currentPage === index + 1
                    ? "bg-blue text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrdersTable;
