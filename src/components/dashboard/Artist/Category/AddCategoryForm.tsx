import React, { useState } from 'react';


interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: 'Electronics' },
  { id: 2, name: 'Fashion' },
  { id: 3, name: 'Home & Garden' },
];


const AddCategoryForm: React.FC = () => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryId] = useState<number>(Math.floor(Math.random() * 10000)); // Auto-generated ID
  const [parentCategory, setParentCategory] = useState<number | null>(null);
  const [productsSelected, setProductsSelected] = useState<number[]>([]);
  const [categoryImage, setCategoryImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [seoMetaTags, setSeoMetaTags] = useState('');
  const [formMessage, setFormMessage] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCategoryImage(e.target.files[0]);
    }
  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      categoryName,
      categoryId,
      parentCategory,
      productsSelected,
      categoryImage,
      description,
      seoMetaTags,
    });
    setFormMessage('Category created successfully!');
    // Optionally reset form
    setCategoryName('');
    setParentCategory(null);
    setProductsSelected([]);
    setCategoryImage(null);
    setDescription('');
    setSeoMetaTags('');
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add Category</h2>

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

          {/* Category ID (Hidden) */}
          <input type="hidden" value={categoryId} />

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

        <div className="flex flex-col items-center">
        <button
          type="submit"
          className="w-[30%] bg-[#1C4A93] text-white py-2 rounded-md hover:bg-blue-dark transition"
        >
                  Submit
        </button>
        </div>
        {formMessage && (
          <p className="mt-4 text-green">{formMessage}</p>
        )}
      </form>
    </div>
  );
};

export default AddCategoryForm;
