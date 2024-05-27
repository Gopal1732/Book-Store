import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl } = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Historical",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Horror",
    "Mystery & Thriller",
    "Romance"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // Handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = selectedBookCategory;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObj = {
      bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl
    };

    // Update the book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    })
    .then(res => res.json())
    .then(data => {
      alert("Book is updated successfully!");
    })
   
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <label htmlFor="bookTitle" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Book Title
              </label>
            </div>
            <input
              id="bookTitle"
              type="text"
              name='bookTitle'
              placeholder="Book name"
              required
              defaultValue={bookTitle}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <label htmlFor="authorName" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Author Name
              </label>
            </div>
            <input
              id="authorName"
              type="text"
              name='authorName'
              placeholder="Author Name"
              required
              defaultValue={authorName}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <label htmlFor="imageUrl" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Book Image Url
              </label>
            </div>
            <input
              id="imageUrl"
              type="text"
              name='imageUrl'
              placeholder="Book Image Url"
              required
              defaultValue={imageUrl}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <label htmlFor="inputState" className="text-sm font-medium text-gray-900 dark:text-gray-300">
                Category
              </label>
            </div>

            <select
              id="inputState"
              name="categoryName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <label htmlFor="bookDescription" className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Book Description
            </label>
          </div>
          <textarea
            id="bookDescription"
            name='bookDescription'
            placeholder="Write your book description..."
            required
            rows="6"
            defaultValue={bookDescription}
            className="textarea bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>

        <div>
          <div className="mb-2 block">
            <label htmlFor="bookPdfUrl" className="text-sm font-medium text-gray-900 dark:text-gray-300">
              Book Pdf Url
            </label>
          </div>
          <input
            id="bookPdfUrl"
            type="text"
            name='bookPdfUrl'
            placeholder="Book Pdf Url"
            required
            defaultValue={bookPdfUrl}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBooks;
