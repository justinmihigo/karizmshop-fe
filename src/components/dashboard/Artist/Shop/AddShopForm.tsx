import React, { useState, useEffect } from 'react';

interface Category {
  id: number;
  name: string;
}

const getArtistInfo = () => {
  return { artistId: '12345', artistName: 'Ambroise Doe' };
};

const categories: Category[] = [
  { id: 1, name: 'Music' },
  { id: 2, name: 'Fashion' },
  { id: 3, name: 'Art' },
];

const AddShopForm: React.FC = () => {
  const [shopName, setShopName] = useState('');
  const [icon, setIcon] = useState<File | null>(null);
  const [bannerImage, setBannerImage] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<number | null>(null);
  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [openingHours, setOpeningHours] = useState('');

  const [artistName, setArtistName] = useState('');
  const [artistId, setArtistId] = useState('');

  useEffect(() => {
    const artistData = getArtistInfo();
    setArtistName(artistData.artistName);
    setArtistId(artistData.artistId); 
  }, []);

  const handleIconChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIcon(e.target.files[0]);
    }
  };

  const handleBannerImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setBannerImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      shopName,
      icon,
      description,
      category,
      artistId,
      artistName,
      bannerImage,
      address,
      contactInfo,
      openingHours,
    });
  };

  return (
    <div className="container mx-auto p-6">
      {/* Shop Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="p-4 bg-[#1C4A93] text-white rounded shadow">
          <h3 className="font-bold text-lg">Views</h3>
          <p className="text-2xl">1,234</p>
        </div>
        <div className="p-4 bg-[#1C4A93] text-white rounded shadow">
          <h3 className="font-bold text-lg">Total Sales</h3>
          <p className="text-2xl">$12,345</p>
        </div>
        <div className="p-4 bg-[#1C4A93] text-white rounded shadow">
          <h3 className="font-bold text-lg">Orders</h3>
          <p className="text-2xl">567</p>
        </div>
      </div>

      {/* Add Shop Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Add Shop</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Shop Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Shop Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={shopName}
              onChange={(e) => setShopName(e.target.value)}
              required
            />
          </div>


          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Artist Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={artistName}
              disabled
            />
          </div>
          {/* Banner Image */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Banner Image
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              onChange={handleBannerImageChange}
            />
          </div>

          {/* Shop Icon */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Icon
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              onChange={handleIconChange}
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={category ?? ''}
              onChange={(e) => setCategory(Number(e.target.value))}
              required
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          {/* Contact Information */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Contact Information (Phone/Email)
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              required
            />
          </div>

          {/* Opening Hours */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Opening Hours
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={openingHours}
              onChange={(e) => setOpeningHours(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

        </div>


        <div className="flex flex-col items-center">
        <button
          type="submit"
          className="w-[30%] bg-[#1C4A93] text-white py-2 rounded-md hover:bg-blue-dark transition"
        >
          Create Shop
        </button>
        </div>

      </form>
    </div>
  );
};

export default AddShopForm;
