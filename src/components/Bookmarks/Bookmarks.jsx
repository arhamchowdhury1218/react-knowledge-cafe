import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarks }) => {
  return (
    <div className="text-4xl font-bold w-1/3 bg-gray-200 p-4 rounded-lg m-4 text-center">
      Bookmarked Blogs: {bookMarks.length}
      {bookMarks.map((bookmark) => (
        <div key={bookmark.id} className="text-2xl font-semibold">
          <Bookmark bookmark={bookmark}></Bookmark>
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;
