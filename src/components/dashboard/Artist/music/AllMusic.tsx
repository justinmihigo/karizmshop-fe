import { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

interface Music {
  id: number;
  musicName: string;
  albumName: string;
  artistFirstName: string;
  artistLastName: string;
  releaseDate: string;
  uploadMusicFile: string | null;
  uploadVideoFile: string | null;
  description: string;
  price: number;
  genre: string;
  duration: string;
}

const musicList: Music[] = [
  {
    id: 1,
    musicName: "Song of Hope",
    albumName: "Hope Album",
    artistFirstName: "John",
    artistLastName: "Doe",
    releaseDate: "2024-06-01",
    uploadMusicFile: "https://example.com/music1.mp3",
    uploadVideoFile: "https://example.com/video1.mp4",
    description: "A hopeful and uplifting song",
    price: 9.99,
    genre: "Pop",
    duration: "3:45",
  },
  {
    id: 2,
    musicName: "Echoes of Love",
    albumName: "Heartbeats",
    artistFirstName: "Emily",
    artistLastName: "Smith",
    releaseDate: "2023-11-15",
    uploadMusicFile: "https://example.com/music2.mp3",
    uploadVideoFile: "https://example.com/video2.mp4",
    description: "A soulful ballad about love",
    price: 12.99,
    genre: "R&B",
    duration: "4:10",
  },
  {
    id: 3,
    musicName: "Midnight Dreams",
    albumName: "Nightfall",
    artistFirstName: "David",
    artistLastName: "Miller",
    releaseDate: "2024-01-20",
    uploadMusicFile: "https://example.com/music3.mp3",
    uploadVideoFile: "https://example.com/video3.mp4",
    description: "A smooth jazz piece to relax to",
    price: 10.99,
    genre: "Jazz",
    duration: "5:20",
  },
  {
    id: 4,
    musicName: "Skyline",
    albumName: "City Lights",
    artistFirstName: "Sophia",
    artistLastName: "Brown",
    releaseDate: "2023-09-08",
    uploadMusicFile: "https://example.com/music4.mp3",
    uploadVideoFile: "https://example.com/video4.mp4",
    description: "An electronic dance track with vibrant beats",
    price: 8.99,
    genre: "Electronic",
    duration: "3:50",
  },
  {
    id: 5,
    musicName: "Waves of Serenity",
    albumName: "Ocean Breeze",
    artistFirstName: "Lucas",
    artistLastName: "Wilson",
    releaseDate: "2024-02-12",
    uploadMusicFile: "https://example.com/music5.mp3",
    uploadVideoFile: "https://example.com/video5.mp4",
    description: "A calming instrumental inspired by the sea",
    price: 7.99,
    genre: "Ambient",
    duration: "6:05",
  },
  {
    id: 6,
    musicName: "Fires of Passion",
    albumName: "Ember",
    artistFirstName: "Mia",
    artistLastName: "Jones",
    releaseDate: "2023-07-23",
    uploadMusicFile: "https://example.com/music6.mp3",
    uploadVideoFile: "https://example.com/video6.mp4",
    description: "A fiery Latin-inspired dance number",
    price: 11.99,
    genre: "Latin",
    duration: "4:30",
  },
  {
    id: 7,
    musicName: "Breaking Free",
    albumName: "Liberation",
    artistFirstName: "Oliver",
    artistLastName: "Garcia",
    releaseDate: "2024-04-05",
    uploadMusicFile: "https://example.com/music7.mp3",
    uploadVideoFile: "https://example.com/video7.mp4",
    description: "An empowering anthem for change",
    price: 9.49,
    genre: "Rock",
    duration: "4:15",
  },
  {
    id: 8,
    musicName: "Golden Hour",
    albumName: "Sunset Dreams",
    artistFirstName: "Lily",
    artistLastName: "Taylor",
    releaseDate: "2023-06-10",
    uploadMusicFile: "https://example.com/music8.mp3",
    uploadVideoFile: "https://example.com/video8.mp4",
    description: "A mellow acoustic track perfect for unwinding",
    price: 6.99,
    genre: "Acoustic",
    duration: "3:35",
  },
  {
    id: 9,
    musicName: "Starlight",
    albumName: "Cosmic Journey",
    artistFirstName: "Noah",
    artistLastName: "Martinez",
    releaseDate: "2023-10-28",
    uploadMusicFile: "https://example.com/music9.mp3",
    uploadVideoFile: "https://example.com/video9.mp4",
    description: "An ethereal track with spacey vibes",
    price: 9.75,
    genre: "Ambient",
    duration: "5:40",
  },
  {
    id: 10,
    musicName: "Rhythm of the Night",
    albumName: "After Hours",
    artistFirstName: "Emma",
    artistLastName: "Moore",
    releaseDate: "2024-03-22",
    uploadMusicFile: "https://example.com/music10.mp3",
    uploadVideoFile: "https://example.com/video10.mp4",
    description: "An upbeat club track with a catchy hook",
    price: 8.49,
    genre: "Dance",
    duration: "3:55",
  },
  {
    id: 11,
    musicName: "Mystic Forest",
    albumName: "Nature Sounds",
    artistFirstName: "James",
    artistLastName: "Johnson",
    releaseDate: "2024-05-18",
    uploadMusicFile: "https://example.com/music11.mp3",
    uploadVideoFile: "https://example.com/video11.mp4",
    description: "A meditative track with natural soundscapes",
    price: 5.99,
    genre: "New Age",
    duration: "6:15",
  },
  {
    id: 12,
    musicName: "Adrenaline Rush",
    albumName: "Speedway",
    artistFirstName: "Isabella",
    artistLastName: "Clark",
    releaseDate: "2023-08-30",
    uploadMusicFile: "https://example.com/music12.mp3",
    uploadVideoFile: "https://example.com/video12.mp4",
    description: "An energetic rock track full of intensity",
    price: 9.25,
    genre: "Rock",
    duration: "4:05",
  },
  {
    id: 13,
    musicName: "Through the Rain",
    albumName: "Silver Lining",
    artistFirstName: "Ethan",
    artistLastName: "King",
    releaseDate: "2024-01-11",
    uploadMusicFile: "https://example.com/music13.mp3",
    uploadVideoFile: "https://example.com/video13.mp4",
    description: "A powerful ballad about resilience",
    price: 10.49,
    genre: "Pop",
    duration: "4:50",
  },
  {
    id: 14,
    musicName: "Into the Wild",
    albumName: "Adventure",
    artistFirstName: "Ava",
    artistLastName: "Davis",
    releaseDate: "2023-12-03",
    uploadMusicFile: "https://example.com/music14.mp3",
    uploadVideoFile: "https://example.com/video14.mp4",
    description: "An epic orchestral piece filled with drama",
    price: 12.49,
    genre: "Classical",
    duration: "6:45",
  },
  {
    id: 15,
    musicName: "Bright Lights",
    albumName: "Metropolis",
    artistFirstName: "William",
    artistLastName: "Roberts",
    releaseDate: "2024-07-14",
    uploadMusicFile: "https://example.com/music15.mp3",
    uploadVideoFile: "https://example.com/video15.mp4",
    description: "A funky electro-pop track with catchy grooves",
    price: 9.99,
    genre: "Electro-Pop",
    duration: "3:25",
  },
];

const AllMusicTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const musicPerPage = 5;

  const filteredMusic = musicList.filter(
    (music) =>
      music.musicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      music.albumName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      `${music.artistFirstName} ${music.artistLastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const indexOfLastMusic = currentPage * musicPerPage;
  const indexOfFirstMusic = indexOfLastMusic - musicPerPage;
  const currentMusic = filteredMusic.slice(indexOfFirstMusic, indexOfLastMusic);
  const totalPages = Math.ceil(filteredMusic.length / musicPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="mx-auto p-6 font-mono w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">All Music</h2>

      <div className="relative mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg pr-10"
          placeholder="Search music by name, album, or artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IoIosSearch className="absolute text-[25px] right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-gray-900 bg-gray-100 uppercase border-b border-gray-200">
                <th className="px-4 py-3">ID</th>
                <th className="px-4 py-3">Music Name</th>
                <th className="px-4 py-3">Album Name</th>
                <th className="px-4 py-3">Artist</th>
                <th className="px-4 py-3">View Track</th>

                <th className="px-4 py-3">Release Date</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Genre</th>
                <th className="px-4 py-3">Duration</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentMusic.length > 0 ? (
                currentMusic.map((music) => (
                  <tr className="text-gray-700" key={music.id}>
                    <td className="px-4 py-3 border-b">{music.id}</td>
                    <td className="px-4 py-3 border-b">{music.musicName}</td>
                    <td className="px-4 py-3 border-b">{music.albumName}</td>
                    <td className="px-4 py-3 border-b">
                      {music.artistFirstName} {music.artistLastName}
                    </td>
                    <td className="px-4 py-3 border-b">
                      {music.uploadMusicFile && (
                        <a
                          href={music.uploadMusicFile}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#1C4A93] hover:underline"
                        >
                          View Track
                        </a>
                      )}
                    </td>

                    <td className="px-4 py-3 border-b">{music.releaseDate}</td>
                    <td className="px-4 py-3 border-b">${music.price}</td>
                    <td className="px-4 py-3 border-b">{music.genre}</td>
                    <td className="px-4 py-3 border-b">{music.duration}</td>
                    <td className="px-4 py-3 border-b">
                      <div className="flex items-center space-x-2">
                        <button className="text-[#1C4A93] hover:text-[#537ec5]">
                          <MdModeEdit size={20} />
                        </button>
                        <button className="text-red hover:text-red-700">
                          <MdDelete size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-3 text-center" colSpan={9}>
                    No music found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-end space-x-1">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 ${
              currentPage === index + 1
                ? "bg-[#1C4A93] text-white outline-none"
                : "bg-gray-200 text-gray-700 outline-none"
            } rounded`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </section>
  );
};

export default AllMusicTable;
