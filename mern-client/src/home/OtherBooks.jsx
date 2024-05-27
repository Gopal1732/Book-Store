import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://book-store-backened.vercel.app/all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
    }, [])

    return (
        <div>
            <BookCard books={books} headline="Other Books" />
        </div>
    )
}

export default OtherBooks