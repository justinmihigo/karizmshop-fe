import React, { useState, useEffect } from "react";

interface Book {
  id: number;
  bookName: string;
  bookTitle: string;
  author: string;
  coverImage: string;
  document: string;
  price: number;
  yearOfPublish: number;
  status: "Available" | "Out of Stock";
  publishedDate: string;
}

interface EditBooksModalProps {
  isOpen: boolean;
  book: Book | null;
  onClose: () => void;
  onSave: (updatedBook: Book) => void;
}

const EditBooksModal: React.FC<EditBooksModalProps> = ({ isOpen, book, onClose, onSave }) => {
  const [formData, setFormData] = useState<Book | null>(null);

  useEffect(() => {
    if (book) {
      setFormData(book);
    }
  }, [book]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (formData) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      onSave(formData);
    }
  };

  if (!isOpen || !formData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] md:w-[50%] relative">
        <h2 className="text-xl font-bold mb-4">Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Book Name</label>
            <input
              type="text"
              name="bookName"
              value={formData.bookName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Book Title</label>
            <input
              type="text"
              name="bookTitle"
              value={formData.bookTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Year of Publish</label>
            <input
              type="number"
              name="yearOfPublish"
              value={formData.yearOfPublish}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" className="px-4 py-2 bg-gray-500 text-white rounded" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-[#1C4A93] text-white rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBooksModal;
