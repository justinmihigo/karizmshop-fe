/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";

interface Shop {
  id: number;
  name: string;
  artistName: string;
  category: string;
  status: "Pending" | "Approved" | "Rejected";
  dateSubmitted: string;
}

const mockShops: Shop[] = [
  {
    id: 1,
    name: "Art Hub",
    artistName: "John Doe",
    category: "Paintings",
    status: "Pending",
    dateSubmitted: "2024-09-21",
  },
  {
    id: 2,
    name: "Craft Corner",
    artistName: "Jane Smith",
    category: "Handicrafts",
    status: "Approved",
    dateSubmitted: "2024-08-10",
  },
  {
    id: 3,
    name: "StudioX",
    artistName: "Alice Green",
    category: "Digital Art",
    status: "Rejected",
    dateSubmitted: "2024-07-22",
  },
  {
    id: 4,
    name: "Wood Wonders",
    artistName: "Tom Lee",
    category: "Woodwork",
    status: "Approved",
    dateSubmitted: "2024-08-30",
  },
  {
    id: 5,
    name: "Sculpture Spot",
    artistName: "Sara Brown",
    category: "Sculptures",
    status: "Pending",
    dateSubmitted: "2024-09-18",
  },
  {
    id: 6,
    name: "Sculpture Spot",
    artistName: "Sara Brown",
    category: "Sculptures",
    status: "Pending",
    dateSubmitted: "2024-09-18",
  },
];

const ShopApprovalTable = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Pending" | "Approved" | "Rejected">("All");

  const shopsPerPage = 5;

  useEffect(() => {
    setShops(mockShops);
  }, []);

  const filteredShops = shops.filter((shop) => {
    return (
      (shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shop.artistName.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (statusFilter === "All" || shop.status === statusFilter)
    );
  });

  const indexOfLastShop = currentPage * shopsPerPage;
  const indexOfFirstShop = indexOfLastShop - shopsPerPage;
  const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);
  const totalPages = Math.ceil(filteredShops.length / shopsPerPage);


  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);


  const handleApprove = (shopId: number) => {
    setShops((prev) =>
      prev.map((shop) =>
        shop.id === shopId ? { ...shop, status: "Approved" } : shop
      )
    );
  };

  const handleReject = (shopId: number) => {
    setShops((prev) =>
      prev.map((shop) =>
        shop.id === shopId ? { ...shop, status: "Rejected" } : shop
      )
    );
  };

  const totalShops = shops.length;
  const approvedShops = shops.filter((shop) => shop.status === "Approved").length;
  const pendingShops = shops.filter((shop) => shop.status === "Pending").length;
  const rejectedShops = shops.filter((shop) => shop.status === "Rejected").length;

  const getStatusClass = (status: "Pending" | "Approved" | "Rejected") => {
    switch (status) {
      case "Approved":
        return "text-green-600 font-bold";
      case "Pending":
        return "text-yellow-600 font-bold";
      case "Rejected":
        return "text-red-600 font-bold";
      default:
        return "";
    }
  };

  return (
    <div className="p-6 font-mono w-full">
      <h2 className="text-2xl font-bold mb-4">Shop Approval Table</h2>

      <div className="grid grid-cols-1 gap-4 mb-6 lg:grid-cols-4 md:grid-cols-2">
        <div className="bg-[#1C4A93] p-4 rounded-lg shadow-md items-center flex flex-col justify-center">
          <h3 className="text-[20px] text-white items-center font-bold">Total Shops</h3>
          <p className="text-[30px] text-white font-bold">{totalShops}</p>
        </div>
        <div className="bg-[#1C4A93] p-4 rounded-lg shadow-md items-center flex flex-col justify-center">
          <h3 className="text-[20px] text-white items-center font-bold">Approved Shops</h3>
          <p className="text-[30px] text-white font-bold">{approvedShops}</p>
        </div>
        <div className="bg-[#1C4A93] p-4 rounded-lg shadow-md items-center flex flex-col justify-center">
          <h3 className="text-[20px] text-white items-center font-bold">Pending Shops</h3>
          <p className="text-[30px] text-white font-bold">{pendingShops}</p>
        </div>
        <div className="bg-[#1C4A93] p-4 rounded-lg shadow-md items-center flex flex-col justify-center">
          <h3 className="text-[20px] text-white items-center font-bold">Rejected Shops</h3>
          <p className="text-[30px] text-white font-bold">{rejectedShops}</p>
        </div>
      </div>

      <div className="">
       
        <div className="relative mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg pr-10"
          placeholder="Search by shop name or artist..."

          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IoIosSearch className="absolute text-[25px] right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <div className="w-full items-end justify-end flex flex-col">
      <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as any)}
          className="ml-4 p-2 border border-gray-300 rounded-lg"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      </div>

      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 text-md font-semibold uppercase">
                <th className="px-4 py-3">Shop ID</th>
                <th className="px-4 py-3">Shop Name</th>
                <th className="px-4 py-3">Artist Name</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date Submitted</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentShops.length > 0 ? (
                currentShops.map((shop) => (
                  <tr className="text-gray-700" key={shop.id}>
                    <td className="px-4 py-3 border-b">{shop.id}</td>
                    <td className="px-4 py-3 border-b">{shop.name}</td>
                    <td className="px-4 py-3 border-b">{shop.artistName}</td>
                    <td className="px-4 py-3 border-b">{shop.category}</td>
                    <td className={`px-4 py-3 border-b ${getStatusClass(shop.status)}`}>
                      {shop.status}
                    </td>
                    <td className="px-4 py-3 border-b">{shop.dateSubmitted}</td>
                    <td className="px-4 py-3 border-b">
                      {shop.status === "Pending" ? (
                        <>
                          <button
                            className="px-4 py-2 bg-green text-white rounded-lg mr-2 w-[90px] outline-none cursor-pointer"
                            onClick={() => handleApprove(shop.id)}
                          >
                            Approve
                          </button>
                          <button
                            className="px-4 py-2 bg-red text-white rounded-lg w-[90px] outline-none cursor-pointer"
                            onClick={() => handleReject(shop.id)}
                          >
                            Reject
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="px-4 py-2 bg-red text-white rounded-lg mr-2"
                            onClick={() => handleReject(shop.id)}
                          >
                            Reject
                          </button>
                          <button
                            className="px-4 py-2 bg-green text-white rounded-lg"
                            onClick={() => handleApprove(shop.id)}
                          >
                            Approve
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-4">
                    No shops found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>


      <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600">
            Showing {indexOfFirstShop + 1} to{" "}
            {Math.min(indexOfLastShop, filteredShops.length)} of{" "}
            {filteredShops.length} Shops
          </div>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-md outline-none ${
                  currentPage === index + 1
                    ? "bg-[#1C4A93] text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-[#1C4A93] hover:text-white"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
    </div>
  );
};

export default ShopApprovalTable;
