import React, { useState, useRef } from "react";

interface BookFormData {
  bookName: string;
  bookTitle: string;
  authorFirstName: string;
  authorLastName: string;
  publishedDate: string;
  uploadFile: File | null;
  description: string;
  price: number;
  yearOfPublish: number;
  pageNumber: number;
}

const PostBook: React.FC = () => {
  const [formData, setFormData] = useState<BookFormData>({
    bookName: "",
    bookTitle: "",
    authorFirstName: "",
    authorLastName: "",
    publishedDate: "",
    uploadFile: null,
    description: "",
    price: 0,
    yearOfPublish: new Date().getFullYear(),
    pageNumber: 0,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {  
        setFormData((prevData) => ({
            ...prevData,
            profilePic: files[0], 
        }));
    }
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-auto bg-gray-100 flex justify-center items-center mt-10">
      <form
        className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Post a Book</h2>

        </div>

        <div className="">
          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Book Name</label>
              <input
                type="text"
                name="bookName"
                value={formData.bookName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Book Title</label>
              <input
                type="text"
                name="bookTitle"
                value={formData.bookTitle}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Author First Name</label>
              <input
                type="text"
                name="authorFirstName"
                value={formData.authorFirstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Author Last Name</label>
              <input
                type="text"
                name="authorLastName"
                value={formData.authorLastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Upload Cover Image</label>
              <input
                type="file"
                accept=".png,.jpg,.jpeg"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Upload Document</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                ref={fileInputRef}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
          <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Published Date</label>
              <input
                type="date"
                name="publishedDate"
                value={formData.publishedDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Price</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Year of Publish</label>
              <input
                type="number"
                name="yearOfPublish"
                value={formData.yearOfPublish}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Page Number</label>
              <input
                type="number"
                name="pageNumber"
                value={formData.pageNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
          </div>
          <div>
          <div className="w-[100%] lg:w-[100%] md:w-[100%]">
              <label className="block mb-1">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                rows={5}
                required
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col w-full items-center justify-center my-5">
          <button
            type="submit"
            className="bg-[#1C4A93] text-white px-20 py-2 rounded-lg hover:bg-[#1C4A93]"
          >
            Save
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostBook;
