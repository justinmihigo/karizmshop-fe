import React, { useState, useRef } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  gender: string;
  socialLinks: {
    twitter: string;
    linkedin: string;
    facebook: string;
    google: string;
  };
  biography: string;
  genres: string[];
  profilePic: File | null;
}

const Profile: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    socialLinks: {
      twitter: "",
      linkedin: "",
      facebook: "",
      google: "",
    },
    biography: "",
    genres: [],
    profilePic: null,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(null); // Using useRef

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevData) => ({
        ...prevData,
        profilePic: e.target.files![0],
      }));
    }
  };

  const handleSocialLinksChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      socialLinks: { ...prevData.socialLinks, [name]: value },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center mt-10">
      <form
        className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Edit Artist Profile</h2>
          <button
            type="submit"
            className="bg-[#1C4A93] text-white px-10 py-2 rounded-lg hover:bg-[#1C4A93]"
          >
            Save
          </button>
        </div>

        <div className="">
          <div className="col-span-2 flex flex-col items-center relative mb-10">
            <label className="mb-2">Profile Picture</label>

            <div className="relative">
              {/* Hidden file input */}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef} // Using useRef for the file input
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              {formData.profilePic ? (
                <img
                  src={URL.createObjectURL(formData.profilePic)}
                  alt="Profile"
                  className="w-25 h-25 rounded-full object-cover"
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">No Image</span>
                </div>
              )}

              {/* Plus icon for image upload */}
              <div
                className="absolute bottom-0 right-0 bg-[#1C4A93] w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => fileInputRef.current?.click()} // Trigger file input click using ref
              >
                <span className="text-white text-xl font-bold">+</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Twitter</label>
              <input
                type="text"
                name="twitter"
                value={formData.socialLinks.twitter}
                onChange={handleSocialLinksChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">LinkedIn</label>
              <input
                type="text"
                name="linkedin"
                value={formData.socialLinks.linkedin}
                onChange={handleSocialLinksChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Facebook</label>
              <input
                type="text"
                name="facebook"
                value={formData.socialLinks.facebook}
                onChange={handleSocialLinksChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Google</label>
              <input
                type="text"
                name="google"
                value={formData.socialLinks.google}
                onChange={handleSocialLinksChange}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between  md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[100%] md:w-[100%]">
              <label className="block mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleSelectChange}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="col-span-2">
            <label className="block mb-1">Biography</label>
            <textarea
              name="biography"
              value={formData.biography}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              rows={5}
            ></textarea>
          </div>

          <div className="col-span-2">
            <label className="block mb-1">Genres</label>
            <select
              multiple
              name="genres"
              value={formData.genres}
              onChange={handleSelectChange}
              className="w-full px-4 py-2 border rounded-lg"
            >
              <option value="rock">Rock</option>
              <option value="pop">Pop</option>
              <option value="jazz">Jazz</option>
              <option value="classical">Classical</option>
              <option value="hiphop">Hip Hop</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
