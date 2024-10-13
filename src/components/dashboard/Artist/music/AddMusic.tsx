import React, { useState, useRef } from "react";

interface MusicFormData {
  musicName: string;
  albumName: string;
  artistFirstName: string;
  artistLastName: string;
  releaseDate: string;
  uploadMusicFile: File | null;
  uploadVideoFile: File | null;
  description: string;
  price: number;
  genre: string;
  duration: string;
}

const AddMusicForm: React.FC = () => {
  const [formData, setFormData] = useState<MusicFormData>({
    musicName: "",
    albumName: "",
    artistFirstName: "",
    artistLastName: "",
    releaseDate: "",
    uploadMusicFile: null,
    uploadVideoFile: null,
    description: "",
    price: 0,
    genre: "",
    duration: "",
  });

  const musicFileInputRef = useRef<HTMLInputElement | null>(null);
  const videoFileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const { name } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
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
          <h2 className="text-xl font-bold">Add New Music</h2>

        </div>

        <div className="">
          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Music Name</label>
              <input
                type="text"
                name="musicName"
                value={formData.musicName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Album Name</label>
              <input
                type="text"
                name="albumName"
                value={formData.albumName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Artist First Name</label>
              <input
                type="text"
                name="artistFirstName"
                value={formData.artistFirstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Artist Last Name</label>
              <input
                type="text"
                name="artistLastName"
                value={formData.artistLastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Upload Music</label>
              <input
                type="file"
                name="uploadMusicFile"
                accept=".mp3,.wav"
                onChange={handleFileChange}
                ref={musicFileInputRef}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Upload Music Video (optional)</label>
              <input
                type="file"
                name="uploadVideoFile"
                accept=".mp4,.mkv"
                onChange={handleFileChange}
                ref={videoFileInputRef}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-10 md:flex-row lg:flex-row">
            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Release Date</label>
              <input
                type="date"
                name="releaseDate"
                value={formData.releaseDate}
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
              <label className="block mb-1">Genre</label>
              <input
                type="text"
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="w-[100%] lg:w-[50%] md:w-[50%]">
              <label className="block mb-1">Duration</label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
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

export default AddMusicForm;
