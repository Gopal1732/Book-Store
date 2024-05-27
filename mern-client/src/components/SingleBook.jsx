import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  const { _id, bookTitle,imageUrl} = useLoaderData();
  console.log("Loader Data:", _id, bookTitle); // Add console log to inspect data
  return (
    <div className='mt-28 px-4 lg:px-24'>
      <img src={imageUrl} alt="" className='h-96' />
      <h2>{bookTitle}</h2>
    </div>
  );
};

export default SingleBook;