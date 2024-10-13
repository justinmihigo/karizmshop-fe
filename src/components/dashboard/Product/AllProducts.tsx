import { useState } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
const AllProducts = () => {
    const products = [
        {
          id: 1,
          title: "Product 1",
          type: "Variable",
          category: "Shirt",
          shortDescription: "Short description of Product 1",
          longDescription: "Long description of Product 1",
          regularPrice: "20.00",
          salePrice: "15.00",
          quantity: "100",
          unitMeasure: "pcs",
          tags: ["Men", "Trends"],
          image: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
        },
        {
          id: 2,
          title: "Product 2",
          type: "Simple",
          category: "Shoes",
          shortDescription: "Short description of Product 2",
          longDescription: "Long description of Product 2",
          regularPrice: "50.00",
          salePrice: "40.00",
          quantity: "200",
          unitMeasure: "pcs",
          tags: ["Women", "Fashion"],
          image: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
        },
        {
          id: 3,
          title: "Product 3",
          type: "Variable",
          category: "Hat",
          shortDescription: "Short description of Product 3",
          longDescription: "Long description of Product 3",
          regularPrice: "15.00",
          salePrice: "10.00",
          quantity: "300",
          unitMeasure: "pcs",
          tags: ["Accessories", "Trends"],
          image: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
        },
        {
          id: 4,
          title: "Product 4",
          type: "Simple",
          category: "Bag",
          shortDescription: "Short description of Product 4",
          longDescription: "Long description of Product 4",
          regularPrice: "35.00",
          salePrice: "30.00",
          quantity: "150",
          unitMeasure: "pcs",
          tags: ["Women", "Fashion"],
          image: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
        },
        {
          id: 5,
          title: "Product 5",
          type: "Variable",
          category: "Pants",
          shortDescription: "Short description of Product 5",
          longDescription: "Long description of Product 5",
          regularPrice: "40.00",
          salePrice: "30.00",
          quantity: "80",
          unitMeasure: "pcs",
          tags: ["Men", "Trends"],
          image: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
        },
        {
          id: 6,
          title: "Product 6",
          type: "Simple",
          category: "Watch",
          shortDescription: "Short description of Product 6",
          longDescription: "Long description of Product 6",
          regularPrice: "100.00",
          salePrice: "80.00",
          quantity: "60",
          unitMeasure: "pcs",
          tags: ["Accessories", "Luxury"],
          image: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
        },
        {
          id: 7,
          title: "Product 7",
          type: "Variable",
          category: "Jacket",
          shortDescription: "Short description of Product 7",
          longDescription: "Long description of Product 7",
          regularPrice: "75.00",
          salePrice: "60.00",
          quantity: "120",
          unitMeasure: "pcs",
          tags: ["Men", "Fashion"],
          image: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
        },
        {
          id: 8,
          title: "Product 8",
          type: "Simple",
          category: "Belt",
          shortDescription: "Short description of Product 8",
          longDescription: "Long description of Product 8",
          regularPrice: "25.00",
          salePrice: "20.00",
          quantity: "250",
          unitMeasure: "pcs",
          tags: ["Accessories", "Trends"],
          image: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
        },
        {
          id: 9,
          title: "Product 9",
          type: "Variable",
          category: "Socks",
          shortDescription: "Short description of Product 9",
          longDescription: "Long description of Product 9",
          regularPrice: "10.00",
          salePrice: "8.00",
          quantity: "400",
          unitMeasure: "pcs",
          tags: ["Men", "Comfort"],
          image: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
        },
        {
          id: 10,
          title: "Product 10",
          type: "Simple",
          category: "Gloves",
          shortDescription: "Short description of Product 10",
          longDescription: "Long description of Product 10",
          regularPrice: "30.00",
          salePrice: "25.00",
          quantity: "90",
          unitMeasure: "pcs",
          tags: ["Women", "Winter"],
          image: "https://img.freepik.com/premium-photo/photocomposition-horizontal-online-shopping-banner_23-2151201771.jpg?w=1380",
        },
      ];
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 5;
      const totalPages = Math.ceil(products.length / itemsPerPage);
    
      const handlePageChange = (page: number) => {
        setCurrentPage(page);
      };
    
      const startIndex = (currentPage - 1) * itemsPerPage;
      const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
    
      return (
        <section className="p-8">
          <h1 className="text-xl font-bold mb-6 px-[10px] text-[#000]">
            All Products
          </h1>
    
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Image</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Product Title</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Type</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Category</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Short Description</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Long Description</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Regular Price</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Sale Price</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Quantity</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Unit/Measure</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Tags</th>
                  <th className="px-4 py-2 text-left text-[13px] font-bold text-[#000]">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) => (
                    <tr key={product.id}>
                      <td className="px-4 py-2">
                        <img src={product.image} alt={product.title} className="w-20 h-20 object-cover" />
                      </td>
                      <td className="px-4 py-2">{product.title}</td>
                      <td className="px-4 py-2">{product.type}</td>
                      <td className="px-4 py-2">{product.category}</td>
                      <td className="px-4 py-2">{product.shortDescription}</td>
                      <td className="px-4 py-2">{product.longDescription}</td>
                      <td className="px-4 py-2">{product.regularPrice}</td>
                      <td className="px-4 py-2">{product.salePrice}</td>
                      <td className="px-4 py-2">{product.quantity}</td>
                      <td className="px-4 py-2">{product.unitMeasure}</td>
                      <td className="px-4 py-2">{product.tags.join(", ")}</td>
                      
                      {/* Action buttons */}
                      <td className="px-4 py-2">
                        <div className="flex items-center space-x-2">
                          <button className="text-[#1C4A93] hover:text-[#1C4A93] text-lg cursor-pointer">
                            <MdModeEdit />
                          </button>
                          <button className="text-red hover:text-red text-lg cursor-pointer">
                            <MdDelete />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={12} className="text-center px-4 py-2">
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
    
          <div className="flex justify-between items-center mt-6">
            <div className="text-gray-600">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, products.length)} of {products.length} products
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
        </section>
      );
    };
    
    export default AllProducts;