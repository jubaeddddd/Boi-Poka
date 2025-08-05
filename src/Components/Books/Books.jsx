import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('../../../public/data/booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div className="mt-6">
            <h2 className="text-4xl font-bold text-center">Books</h2>
            <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-8">
                {
                    books.map((book, index) => {
                        let alignment = 'md:justify-start';
                        if (index % 3 === 1) alignment = 'md:justify-center';
                        else if (index % 3 === 2) alignment = 'md:justify-end';

                        return (
                            <div key={index} className={`flex justify-center ${alignment}`}>
                                <Book book={book} />
                            </div>
                        );
                    })
                }
            </div>
        </div>

    );
};

export default Books;