import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const { bookId } = useParams()
    const id = parseInt(bookId)

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id)
    const {
        bookName, author, image, review, totalPages, rating, category, publisher
        , yearOfPublishing } = book


    console.log(book)
    console.log(bookId, typeof (bookId), typeof (id))

    return (
        <div className=" mt-7">
            <div className="flex flex-col lg:flex-row">
                <div className="md:w-1/2 md:h-[711px] flex justify-center items-center bg-gray-100 rounded-3xl">
                    <img
                        src={image} className="md:h-[564px]"
                    />
                </div>
                <div className="flex flex-col md:pl-5 md:w-1/2">
                    <h1 class="text-5xl font-bold">{bookName}</h1>
                    <p class="py-3 text-xl">By: {author}</p>
                    <div className="divider"></div>
                    <p class="py-3 text-xl">{category}</p>
                    <p class="py-3"><span className="font-bold">Review: </span><span className="text-gray-600">{review}</span></p>
                    <p class="py-3"><span className="font-bold">Tag:</span></p>
                    <div>
                        <p>Number of pages: <span>{totalPages}</span></p>
                        <p>Publisher: <span>{publisher}</span></p>
                        <p>Year of publishing: <span>{yearOfPublishing}</span></p>
                        <p>Rating: <span>{rating}</span></p>
                    </div>
                    <div className="mt-3">
                        <button className="btn bg-blue-300 text-white">Read</button>
                        <button className="btn bg-blue-300 ml-4 text-white">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;