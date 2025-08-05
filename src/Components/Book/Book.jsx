import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const { bookName, author, image, tags, category, rating ,bookId } = book


    return ( 
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                <figure className="px-10 pt-10 bg-blue-200 py-8 rounded-lg">
                    <img alt={bookName}
                        className="h-[166px]"
                        src={image} />
                </figure>
                <div className="flex flex-col gap-2 mt-2">
                    <div className="flex gap-1">
                        {
                            tags.map((tag,index) => <button key={index} className="btn btn-xs">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="border-t-1 border-dashed text-gray-300"></div>
                    <div className="flex justify-between">
                        <button className="btn btn-xs">{category}</button>
                        <div className="flex gap-0.5">
                            <p>{rating}</p>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;