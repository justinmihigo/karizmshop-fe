import { useState, ChangeEvent, KeyboardEvent } from "react";
import HSTextarea from "../../form/HSTextarea";
const AddProductForm = () => {
  const [tags, setTags] = useState(["Men", "Social Media", "Trends"]);
  const [newTag, setNewTag] = useState(""); 
  const [gallery, setGallery] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);

  const handleAddTag = () => {
    if (newTag !== "") {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTag !== "") {
      handleAddTag(); 
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleGalleryChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setGallery((prevGallery) => [...prevGallery, ...newImages]);
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setGallery(gallery.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold mb-6 px-[40px] text-[#6B7280]">
        Create new product
      </h1>

      <div className="flex flex-col lg:flex-row md:flex-row w-[100%] justify-around items-center lg:items-start md:items-start gap-10">
        <div className="w-[100%]  lg:w-[50%]">
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">General Information</h2>
            <div>
              <p className="text-[#424856] text-[14px] font-bold mb-2">
                Product Title
              </p>
              <input
                type="text"
                placeholder="Product title"
                className="w-full border p-2 mb-4 border-slate-300 rounded-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-[#424856] text-[14px] font-bold mb-2">
                  Product Type
                </p>
                <select className="w-full border p-2 border-slate-300 rounded-md">
                  <option>Type</option>
                  <option>Variable</option>
                </select>
              </div>
              <div>
                <p className="text-[#424856] text-[14px] font-bold mb-2">
                  Product Category
                </p>
                <select className="w-full border p-2 border-slate-300 rounded-md">
                  <option>Categories</option>
                  <option>Shirt</option>
                </select>
              </div>
            </div>
            <div>
              <p className="text-[#424856] text-[14px] font-bold mb-2">
                Short Description
              </p>
              <HSTextarea
                data-testid="message"
                id="message"
                rows={4}
                placeholder="Short Description"
                className="border p-2 pl-5 rounded-md w-full border-slate-300"
             
              />
            </div>
            <div>
              <p className="text-[#424856] text-[14px] font-bold mb-2">
                Long Description
              </p>
              <HSTextarea
                data-testid="message"
                id="message"
                rows={4}
                placeholder="Long Description"
                className="border p-2 pl-5 rounded-md w-full border-slate-300"
             
              />
            </div>
          </div>

          {/* Media Section */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">Media</h2>
            <div className="mb-4">
              <h3>Feature Image</h3>
              <div className="relative">
                {image ? (
                  <div className="mb-3">
                    <img
                      src={image}
                      alt="Feature"
                      className="w-[50%] h-48 object-cover"
                    />
                    <button
                      className="absolute bottom-0 left-0 p-2 bg-gray-800 text-white"
                      onClick={() => setImage(null)}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="border p-2 w-full"
                  />
                )}
              </div>
            </div>
            <div>
              <h3>Gallery</h3>
              <div className="grid grid-cols-5 gap-2">
                {gallery.map((img, index) => (
                  <div key={index} className="relative">
                    <img
                      src={img}
                      alt={`Gallery ${index}`}
                      className="w-[100%] h-24 object-fill"
                    />
                    <button
                      className="absolute top-[-5px] right-1 p-1 bg-red-500 text-white font-bold text-[20px]"
                      onClick={() => handleRemoveGalleryImage(index)}
                    >
                      X
                    </button>
                  </div>
                ))}
                {gallery.length < 4 && (
                  <input
                    type="file"
                    multiple
                    onChange={handleGalleryChange}
                    className="border p-2 w-full"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Sales Information */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-3">Sales Information</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
              <p className="text-[#424856] text-[14px] font-bold mb-2">

                Regular Price
              </p>
              <input
                type="text"
                placeholder="Regular price"
                className="w-full border p-2 border-slate-300 rounded-md"
              />
              </div>
              <div>

              <p className="text-[#424856] text-[14px] font-bold mb-2">

                Regular Price
                </p>
              <input
                type="text"
                placeholder="Sale price"
                className="w-full border p-2 border-slate-300 rounded-md"
              />
              </div>


            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
              <p className="text-[#424856] text-[14px] font-bold mb-2">

                  Quantity</p>
                <input
                  type="text"
                  placeholder="Quantity"
                  className="w-full border p-2 border-slate-300 rounded-md"
                />
              </div>
              <div>
              <p className="text-[#424856] text-[14px] font-bold mb-2">

                  Unity / Measure</p>
                <input
                  type="text"
                  placeholder="Unity / Measure"
                  className="w-full border p-2 border-slate-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-6 w-[100%] lg:w-[30%]">
        <h2 className="font-semibold text-lg mb-3">Tags</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[#1C4A93] p-2 rounded flex items-center text-white"
            >
              {tag}
              <button
                onClick={() => handleRemoveTag(index)}
                className="ml-2 text-red-500 text-white font-bold"
              >
                X
              </button>
            </div>
          ))}
          <input
            type="text"
            placeholder="Add another Tag"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)} 
            onKeyDown={handleKeyDown}
            className="border p-2 border-slate-300 rounded-md"
          />
          <button
            onClick={handleAddTag}
            className="px-5 bg-[#1C4A93] h-10 text-white rounded transition-transform transform active:scale-95 hover:scale-105 outline-none"
          >
            Save Tag
          </button>
        </div>
      </div>

      </div>

      {/* Save Button */}
      <div className="items-center flex flex-col justify-center pt-10">
        <button className="bg-[#1C4A93] text-white px-10 py-2 rounded-md font-bold transition-transform transform active:scale-95 hover:scale-105">
          Save and publish
        </button>
      </div>
    </div>
  );
};

export default AddProductForm;
