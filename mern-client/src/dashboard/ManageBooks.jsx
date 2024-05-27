import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-store-backened.vercel.app/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  // Delete a book
  const handleDelete = (id) => {
    fetch(`https://book-store-backened.vercel.app/book/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(() => {
        alert("Book is deleted successfully!");
      })
     
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Book</h2>

      {/* table for book data */}
      <table className="min-w-full lg:w-[1180px] divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider dark:text-gray-400">
              No.
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider dark:text-gray-400">
              Book Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider dark:text-gray-400">
              Author Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider dark:text-gray-400">
              Category
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider dark:text-gray-400">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider dark:text-gray-400">
              Edit or Manage
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
          {allBooks.map((book, index) => (
            <tr key={book.id} className="bg-white dark:bg-gray-800">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </td>
              <td className="px-6 py-4">{book.authorName}</td>
              <td className="px-6 py-4">{book.category}</td>
              <td className="px-6 py-4">${book.price}</td>
              <td className="px-6 py-4">
                <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium mr-5 text-cyan-600 hover:underline dark:text-cyan-500">
                  <span>Edit</span>
                </Link>
                <button onClick={() => handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBooks;
