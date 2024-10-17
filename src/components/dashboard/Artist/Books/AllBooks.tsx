import { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

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


  const books: Book[] = [
    {
      id: 1,
      bookName: "React Mastery",
      bookTitle: "A Complete Guide to React",
      author: "John Doe",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc1.pdf",
      price: 29.99,
      yearOfPublish: 2023,
      status: "Available",
      publishedDate: "June 10, 2023",
    },
    {
      id: 2,
      bookName: "JavaScript: The Good Parts",
      bookTitle: "Understanding JavaScript",
      author: "Douglas Crockford",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc2.pdf",
      price: 24.99,
      yearOfPublish: 2008,
      status: "Out of Stock",
      publishedDate: "May 15, 2008",
    },
    {
      id: 3,
      bookName: "You Don't Know JS",
      bookTitle: "Deep Dive into JavaScript",
      author: "Kyle Simpson",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc3.pdf",
      price: 34.99,
      yearOfPublish: 2015,
      status: "Available",
      publishedDate: "January 5, 2015",
    },
    {
      id: 4,
      bookName: "Eloquent JavaScript",
      bookTitle: "A Modern Introduction to JavaScript",
      author: "Marijn Haverbeke",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc4.pdf",
      price: 19.99,
      yearOfPublish: 2018,
      status: "Available",
      publishedDate: "December 4, 2018",
    },
    {
      id: 5,
      bookName: "Clean Code",
      bookTitle: "A Handbook of Agile Software Craftsmanship",
      author: "Robert C. Martin",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc5.pdf",
      price: 32.99,
      yearOfPublish: 2009,
      status: "Out of Stock",
      publishedDate: "August 1, 2009",
    },
    {
      id: 6,
      bookName: "The Pragmatic Programmer",
      bookTitle: "From Journeyman to Master",
      author: "Andrew Hunt and David Thomas",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc6.pdf",
      price: 39.99,
      yearOfPublish: 1999,
      status: "Available",
      publishedDate: "October 30, 1999",
    },
    {
      id: 7,
      bookName: "Learning Python",
      bookTitle: "Powerful Object-Oriented Programming",
      author: "Mark Lutz",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc7.pdf",
      price: 44.99,
      yearOfPublish: 2013,
      status: "Available",
      publishedDate: "July 6, 2013",
    },
    {
      id: 8,
      bookName: "Python Crash Course",
      bookTitle: "A Hands-On, Project-Based Introduction to Programming",
      author: "Eric Matthes",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc8.pdf",
      price: 25.99,
      yearOfPublish: 2019,
      status: "Out of Stock",
      publishedDate: "November 3, 2019",
    },
    {
      id: 9,
      bookName: "Effective Java",
      bookTitle: "Best Practices for the Java Platform",
      author: "Joshua Bloch",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc9.pdf",
      price: 39.99,
      yearOfPublish: 2018,
      status: "Available",
      publishedDate: "January 12, 2018",
    },
    {
      id: 10,
      bookName: "Head First Design Patterns",
      bookTitle: "A Brain-Friendly Guide",
      author: "Eric Freeman, Elisabeth Robson",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc10.pdf",
      price: 42.99,
      yearOfPublish: 2020,
      status: "Available",
      publishedDate: "November 5, 2020",
    },
    {
      id: 11,
      bookName: "Grokking Algorithms",
      bookTitle: "An Illustrated Guide for Programmers and Other Curious People",
      author: "Aditya Bhargava",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc11.pdf",
      price: 29.99,
      yearOfPublish: 2016,
      status: "Out of Stock",
      publishedDate: "May 9, 2016",
    },
    {
      id: 12,
      bookName: "Introduction to the Theory of Computation",
      bookTitle: "A Theoretical Approach",
      author: "Michael Sipser",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc12.pdf",
      price: 59.99,
      yearOfPublish: 2012,
      status: "Available",
      publishedDate: "February 28, 2012",
    },
    {
      id: 13,
      bookName: "The Mythical Man-Month",
      bookTitle: "Essays on Software Engineering",
      author: "Frederick P. Brooks Jr.",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc13.pdf",
      price: 35.99,
      yearOfPublish: 1995,
      status: "Available",
      publishedDate: "March 15, 1995",
    },
    {
      id: 14,
      bookName: "Refactoring",
      bookTitle: "Improving the Design of Existing Code",
      author: "Martin Fowler",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc14.pdf",
      price: 41.99,
      yearOfPublish: 2018,
      status: "Out of Stock",
      publishedDate: "November 16, 2018",
    },
    {
      id: 15,
      bookName: "Structure and Interpretation of Computer Programs",
      bookTitle: "Second Edition",
      author: "Harold Abelson, Gerald Jay Sussman",
      coverImage: "https://via.placeholder.com/50",
      document: "https://example.com/doc15.pdf",
      price: 49.99,
      yearOfPublish: 1996,
      status: "Available",
      publishedDate: "July 25, 1996",
    }
  ];
    
const AllBooks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const booksPerPage = 5;

  const filteredBooks = books.filter(
    (book) =>
      book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section className="mx-auto p-6 font-mono w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">All Books</h2>

      <div className="relative mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-lg pr-10"
          placeholder="Search books by name, author, or status..."
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
                <th className="px-4 py-3">Cover Image</th>
                <th className="px-4 py-3">Book Name</th>
                <th className="px-4 py-3">Author</th>
                <th className="px-4 py-3">Document</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">Year of Publish</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Published Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentBooks.length > 0 ? (
                currentBooks.map((book) => (
                  <tr className="text-gray-700" key={book.id}>
                    <td className="px-4 py-3 border-b">{book.id}</td>
                    <td className="px-4 py-3 border-b">
                      <img
                        src={book.coverImage}
                        alt={`${book.bookName} Cover`}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="px-4 py-3 border-b">{book.bookName}</td>
                    <td className="px-4 py-3 border-b">{book.author}</td>
                    <td className="px-4 py-3 border-b">
                      <a href={book.document} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        View Document
                      </a>
                    </td>
                    <td className="px-4 py-3 border-b">${book.price}</td>
                    <td className="px-4 py-3 border-b">{book.yearOfPublish}</td>
                    <td className="px-4 py-3 border-b">
                      <span
                        className={`inline-block w-24 text-center  py-2 rounded-full text-[13px] ${
                          book.status === "Available"
                            ? "bg-green text-white"
                            : "bg-red text-white"
                        }`}
                      >
                        {book.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-b">{book.publishedDate}</td>
                    <td className="px-4 py-3 border-b">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue hover:text-blue-700 text-lg cursor-pointer">
                          <MdModeEdit />
                        </button>
                        <button className="text-red hover:text-red-700 text-lg cursor-pointer">
                          <MdDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-3 border-b" colSpan={10}>
                    No books found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-600">
            Showing {indexOfFirstBook + 1} to{" "}
            {Math.min(indexOfLastBook, filteredBooks.length)} of{" "}
            {filteredBooks.length} books
          </div>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-1 rounded-md outline-none ${
                  currentPage === index + 1
                    ? "bg-[#1C4A93] text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-[#1C4A93] hover:text-white"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBooks;
