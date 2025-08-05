import BannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen mt-4 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={BannerImg} alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <button  className="btn text-white bg-[#23BE0A] mt-6">View the list</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;