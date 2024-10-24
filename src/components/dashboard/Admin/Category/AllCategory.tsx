import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import EditCategoryModel from "../../PopupModels/EditCategoryModel";
interface Category {
  id: number;
  name: string;
  parentCategory: string | null;
  image: string;
  description: string;
  seoMetaTags: string;
}

const mockCategories: Category[] = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  name: `Category ${index + 1}`,
  parentCategory:
    index % 5 === 0 ? null : `Category ${Math.floor(index / 5) * 5 + 1}`,
  image: `/api/placeholder/50/50`,
  description: `Description for Category ${index + 1}`,
  seoMetaTags: `SEO tags for Category ${index + 1}`,
}));

const AllCategories: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>(mockCategories);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal control
    const itemsPerPage = 10;
  
    useEffect(() => {
      const filteredCategories = mockCategories.filter(
        (category) =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          category.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCategories(filteredCategories);
      setCurrentPage(1);
    }, [searchTerm]);
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
    const handleEdit = (category: Category) => {
      setSelectedCategory(category); 
      setIsModalOpen(true);
    };
  
    const handleDelete = (id: number) => {
      console.log(`Deleting category with id: ${id}`);
      setCategories(categories.filter((category) => category.id !== id));
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
      setSelectedCategory(null); 
    };
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (updatedCategory: any) => {
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat.id === updatedCategory.categoryId
            ? { ...cat, ...updatedCategory }
            : cat
        )
      );
      setIsModalOpen(false); 
    };
  
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">All Categories</h1>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full p-2 pl-10 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Parent Category</th>
                <th className="py-3 px-6 text-left">Image</th>
                <th className="py-3 px-6 text-left">Description</th>
                <th className="py-3 px-6 text-left">SEO Meta Tags</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {currentItems.map((category) => (
                <tr
                  key={category.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {category.id}
                  </td>
                  <td className="py-3 px-6 text-left">{category.name}</td>
                  <td className="py-3 px-6 text-left">
                    {category.parentCategory || "N/A"}
                  </td>
                  <td className="py-3 px-6 text-left">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="py-3 px-6 text-left">{category.description}</td>
                  <td className="py-3 px-6 text-left">{category.seoMetaTags}</td>
                  <td className="py-3 px-6 text-left">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleEdit(category)}
                        className="text-blue hover:text-blue-700 text-lg cursor-pointer"
                      >
                        <MdModeEdit className="w-5 h-5" color="#1C4A93" />
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="text-red hover:text-red-700 text-lg cursor-pointer"
                      >
                        <MdDelete className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div>
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, categories.length)} of {categories.length}{" "}
            entries
          </div>
          <div className="flex">
            {Array.from(
              { length: Math.ceil(categories.length / itemsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`mx-1 px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
  
        {/* Modal */}
        {isModalOpen && selectedCategory && (
          <EditCategoryModel
            category={selectedCategory}
            onClose={handleModalClose}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    );
  };
  
  export default AllCategories;
  
