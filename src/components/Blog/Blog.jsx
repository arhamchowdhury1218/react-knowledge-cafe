import { FaBeer } from "react-icons/fa";
import { IoBookmark } from "react-icons/io5";

const Blog = ({blog, bookMarks, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover_img,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4">
      <img
        src={cover_img}
        alt={`Cover image for ${title}`}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex justify-between items-center mt-4">
        <div className="flex">
          <img
            src={author_img}
            alt={`Author image for ${author}`}
            className="w-10 h-10 rounded-full"
          />
          <div className="ml-2">
            <p className="text-sm font-medium mr">{author}</p>
            <p className="text-xs text-gray-500">{posted_date}</p>
          </div>
        </div>
        <div className="mt-2 flex">
          <p className="text-xs text-gray-500">{reading_time} min read</p>
          <button
            onClick={() => bookMarks(blog)}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            <IoBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <div className="flex mt-2">
        {hashtags.map((hashtag, index) => (
          <p key={index} className="text-xs text-blue-500 mr-2">
            {hashtag}
          </p>
        ))}
      </div>
      <button onClick={() => handleMarkAsRead(id, reading_time)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Mark as Read
      </button>
    </div>
  );
};

export default Blog;
