import PropTypes from 'prop-types'; // ES6
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleAddToBookmarks }) => {

    const { Title, Cover, Author_Img, Reading_Time, Author, Posted_Date, Hashtags } = blog;

    return (
        <div className='mb-20'>

            <img className='w-full rounded-full mb-8' src={Cover} alt="" />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex gap-4 items-center'>
                    <img className='w-10 rounded-full' src={Author_Img} alt="" />
                    <div>
                        <h2>{Author}</h2>
                        <h2>{Posted_Date}</h2>
                    </div>

                </div>
                <div className='flex items-center gap-2'>

                    <h2>{Reading_Time} min read</h2>
                    <button onClick={() => handleAddToBookmarks(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>Title:{Title}</h2>

            <p>
                {

                    Hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>


        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.function,
}


export default Blog;