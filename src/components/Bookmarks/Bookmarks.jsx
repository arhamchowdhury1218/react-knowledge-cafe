import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarks,readingTime }) => {
  return (
    <div className="text-4xl font-bold w-1/3 bg-gray-200 p-4 rounded-lg m-4 text-center">
      Bookmarked Blogs: {bookMarks.length}
      <p className="text-2xl font-semibold mt-4 text-blue-700">Total Reading Time: {readingTime} minutes</p>  
      {bookMarks.map((bookmark, index) => (
        <div key={index} className="text-2xl font-semibold">
          <Bookmark bookmark={bookmark}></Bookmark>
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;
