import { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import EditShopModal from "./EditShopModal";
import ConfirmationModal from "./ConfirmationModal";
interface Shop {
  id: number;
  name: string;
  owner: string;
  icon: string;
  banner: string;
  status: "Active" | "Inactive";
  createdDate: string;
  category: number | null;
  address: string;
  contactInfo: string;
  openingHours: string;
  description: string;

}

const shops: Shop[] = [
  {
    id: 1,
    name: "Tech Haven",
    owner: "John Doe",
    icon: "https://via.placeholder.com/50",
    banner: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
    status: "Active",
    createdDate: "May 12, 2023",
    category: 1,
    address: "123 Tech Street, Silicon Valley, CA 94000",
    contactInfo: "+1 (555) 123-4567",
    openingHours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
    description: "Your one-stop shop for all things tech. From the latest gadgets to essential accessories, Tech Haven has it all."
  },
  {
    id: 2,
    name: "Fashion Boutique",
    owner: "Alice Smith",
    icon: "https://via.placeholder.com/50",
    banner: "https://img.freepik.com/free-psd/online-shopping-banner-template_23-2148900156.jpg?w=1380&t=st=1728837485~exp=1728838085~hmac=8b4923e9a18daa6e62c65a21b8381c8008b7b1cb138978b8616e5c14f1e1039e",
    status: "Inactive",
    createdDate: "April 20, 2023",
    category: 2,
    address: "456 Style Avenue, Fashion District, NY 10001",
    contactInfo: "+1 (555) 987-6543",
    openingHours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM",
    description: "Discover the latest trends and timeless classics at our Fashion Boutique. We offer a curated selection of clothing and accessories for the style-conscious."
  },
  {
    id: 3,
    name: "Gourmet Delights",
    owner: "Chef Gordon",
    icon: "https://via.placeholder.com/50",
    banner: "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=1380&t=st=1697570433~exp=1697571033~hmac=69645e7c8c1f84ba7538feeaac2a54f7f52fc5f782e9f7b528a32e7f3b2de520",
    status: "Active",
    createdDate: "June 5, 2023",
    category: 3, 
    address: "789 Flavour Lane, Culinary Quarter, IL 60601",
    contactInfo: "+1 (555) 246-8101",
    openingHours: "Tue-Sun: 11AM-10PM, Mon: Closed",
    description: "Experience a world of flavors at Gourmet Delights. We offer artisanal foods, rare ingredients, and cooking classes for food enthusiasts."
  },
  {
    id: 4,
    name: "Green Thumb Gardens",
    owner: "Flora Green",
    icon: "https://via.placeholder.com/50",
    banner: "https://img.freepik.com/free-photo/assortment-plant-pots-with-plants_23-2148910631.jpg?w=1380&t=st=1697570511~exp=1697571111~hmac=8d2a0ce80cc7406f50c5e50d1357d9c2f2fcbaef73b19ce34ad6f3e558f9d36c",
    status: "Active",
    createdDate: "March 15, 2023",
    category: 4, // Assuming 4 represents "Home & Garden"
    address: "101 Blossom Road, Garden City, OR 97201",
    contactInfo: "+1 (555) 369-2584",
    openingHours: "Mon-Sun: 8AM-6PM",
    description: "Transform your space into a lush oasis with Green Thumb Gardens. We offer a wide variety of plants, gardening tools, and expert advice for both novice and experienced gardeners."
  },
  {
    id: 5,
    name: "Fitness Frontier",
    owner: "Max Power",
    icon: "https://via.placeholder.com/50",
    banner: "https://img.freepik.com/free-photo/weights-machines-gym-room_23-2149000078.jpg?w=1380&t=st=1697570578~exp=1697571178~hmac=e4a6c8a0efe4cc37559b57db9c8b8862d2425d11f6370ea7b14903d3a1b17054",
    status: "Active",
    createdDate: "July 1, 2023",
    category: 5, 
    address: "202 Muscle Street, Fitness Park, CA 90210",
    contactInfo: "+1 (555) 777-9999",
    openingHours: "Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM",
    description: "Push your limits at Fitness Frontier. We offer state-of-the-art equipment, personalized training programs, and a supportive community to help you achieve your fitness goals."
  },
  {
    id: 6,
    name: "Bookworm's Paradise",
    owner: "Paige Turner",
    icon: "https://via.placeholder.com/50",
    banner: "https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?w=1380&t=st=1697570636~exp=1697571236~hmac=2a6e18a1dcce3b616a34eb567d90b3cf794e6e4b0d83dbb60dc4c5ecb58f77d3",
    status: "Active",
    createdDate: "February 14, 2023",
    category: 6, 
    address: "303 Story Lane, Literary Heights, MA 02108",
    contactInfo: "+1 (555) 111-2222",
    openingHours: "Mon-Sat: 9AM-9PM, Sun: 10AM-7PM",
    description: "Dive into a world of stories at Bookworm's Paradise. Our carefully curated collection spans all genres, and our cozy reading nooks invite you to lose yourself in a good book."
  }
];

const MyShops = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false); 
  const shopsPerPage = 5;

  const filteredShops = shops.filter(
    (shop) =>
      shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.owner.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastShop = currentPage * shopsPerPage;
  const indexOfFirstShop = indexOfLastShop - shopsPerPage;
  const currentShops = filteredShops.slice(indexOfFirstShop, indexOfLastShop);
  const totalPages = Math.ceil(filteredShops.length / shopsPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleEditClick = (shop:Shop) => {
    setSelectedShop(shop);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedShop(null);
  };

  const handleUpdateShop = (updatedShop: Shop) => {
    console.log("Updated Shop:", updatedShop);
    setIsModalOpen(false);
    setSelectedShop(null);
  };
  const handleDeleteClick = (shop: Shop) => {
    setSelectedShop(shop);
    setIsConfirmOpen(true); 
  };

  const confirmDelete = () => {
    if (selectedShop) {
      console.log(`Deleted Shop: ${selectedShop.name}`);
    }
    setSelectedShop(null);
  };

  return (
    <section className="mx-auto p-6 font-mono w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">My Shops</h2>

      <div className="relative mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg pr-10"
          placeholder="Search shops by name, owner or status..."
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
                <th className="px-4 py-3">Icon</th>
                <th className="px-4 py-3">Shop Name</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Banner</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Created Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentShops.length > 0 ? (
                currentShops.map((shop) => (
                  <tr className="text-gray-700" key={shop.id}>
                    <td className="px-4 py-3 border-b">{shop.id}</td>
                    <td className="px-4 py-3 border-b">
                      <img
                        src={shop.icon}
                        alt={`${shop.name} Icon`}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="px-4 py-3 border-b">{shop.name}</td>
                    <td className="px-4 py-3 border-b">{shop.owner}</td>
                    <td className="px-4 py-3 border-b">
                      <img
                        src={shop.banner}
                        alt={`${shop.name} Banner`}
                        className="w-full h-20 object-cover rounded-lg"
                      />
                    </td>
                    <td className="px-4 py-3 border-b">
                      <span
                        className={`inline-block w-24 text-center py-2 rounded-full ${
                          shop.status === "Active"
                            ? "bg-[#1C4A93] text-white"
                            : "bg-red text-white"
                        }`}
                      >
                        {shop.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b">{shop.createdDate}</td>
                    <td className="px-4 py-3 border-b">
                      <div className="flex items-center space-x-2">
                        <button className="text-[#1C4A93] hover:text-[#1C4A93] text-lg cursor-pointer"
                        onClick={() => handleEditClick(shop)}
                        >
                          <MdModeEdit />
                        </button>
                        <button className="text-red hover:text-red text-lg cursor-pointer"
                         onClick={() => handleDeleteClick(shop)} 
                        >
                          <MdDelete />
                        </button>
                        
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-3 border-b" colSpan={8}>
                    No shops found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600">
            Showing {indexOfFirstShop + 1} to{" "}
            {Math.min(indexOfLastShop, filteredShops.length)} of{" "}
            {filteredShops.length} shops
          </div>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-md outline-none ${
                  currentPage === index + 1
                    ? "bg-blue text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-blue hover:text-white"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        {isModalOpen && (
        <EditShopModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          shopData={selectedShop}
          onSubmit={handleUpdateShop}
        />
      )}
              {isConfirmOpen && ( // Render the confirmation modal
          <ConfirmationModal
            isOpen={isConfirmOpen}
            onClose={() => setIsConfirmOpen(false)}
            onConfirm={confirmDelete}
          />
        )}
      </div>
    </section>
  );
};

export default MyShops;
