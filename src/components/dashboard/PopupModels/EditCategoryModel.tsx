/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Fashion' },
  { id: 3, name: 'Home & Garden' },
];

interface EditCategoryModelProps {
    category: {
      id: number;
      name: string;
      parentCategoryId?: number | null;
      description: string;
      seoMetaTags: string;
      categoryImage?: string | null;
    };
    onClose: () => void;
    onSubmit: (categoryData: any) => void;
  }
  

const EditCategoryModel: React.FC<EditCategoryModelProps> = ({ category, onClose, onSubmit }) => {
  const [categoryName, setCategoryName] = useState(category.name);
  const [parentCategory, setParentCategory] = useState<number | null>(category.parentCategoryId ?? null);
  const [categoryImage, setCategoryImage] = useState<File | null>(null);
  const [description, setDescription] = useState(category.description);
  const [seoMetaTags, setSeoMetaTags] = useState(category.seoMetaTags);
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    // Set initial form values if editing an existing category
    setCategoryName(category.name);
    setParentCategory(category.parentCategoryId ?? null);
    setDescription(category.description);
    setSeoMetaTags(category.seoMetaTags);
  }, [category]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCategoryImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedCategory = {
      categoryName,
      categoryId: category.id, // Use existing category ID
      parentCategory,
      categoryImage,
      description,
      seoMetaTags,
    };

    onSubmit(updatedCategory);

    setFormMessage('Category updated successfully!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[100%] md:w-[50%] relative">
    <div className="mx-auto p-6">
      <form onSubmit={handleSubmit} className="">
        <h2 className="text-2xl font-bold mb-4">Edit Category</h2>
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          <MdClose />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              required
            />
          </div>

          {/* Parent Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Parent Category
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={parentCategory ?? ''}
              onChange={(e) => setParentCategory(Number(e.target.value))}
            >
              <option value="">Select Parent Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Category Image */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              onChange={handleImageChange}
            />
          </div>

          {/* SEO Meta Tags */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              SEO Meta Tags
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={seoMetaTags}
              onChange={(e) => setSeoMetaTags(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              required
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-center
        ">
          <button
            type="submit"
            className="w-[30%] bg-[#1C4A93] text-white py-2 rounded-md hover:bg-blue-dark transition"
          >
            Update Category
          </button>
        </div>

        {formMessage && (
          <p className="mt-4 text-green-500">{formMessage}</p>
        )}
      </form>
    </div>
    </div>
    </div>
  );
};

export default EditCategoryModel;



