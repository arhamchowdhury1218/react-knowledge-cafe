import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookMarks, setBookmarks] = useState([])
  const [readingtime, setReadingTime] = useState(0)

  const handleAddBookmarks = (blog) => {
    const newBookmarks = [...bookMarks, blog]
    setBookmarks(newBookmarks)
    // console.log("handle clicked", blog);
  }
  const handleMarkAsRead = (id, time) => {
    let newReadingTime = readingtime + time
    setReadingTime(newReadingTime)
    // remove the read blog from the bookmarks list
    const newBookmarks = bookMarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(newBookmarks)
    
  }
  return (
    <>
      <Header></Header>
      <div className="flex max-w-7xl mx-auto">
        <Blogs bookMarks={handleAddBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingtime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
