import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookMarks, setBookmarks] = useState([])
  const handleAddBookmarks = (blog) => {
    const newBookmarks = [...bookMarks, blog]
    setBookmarks(newBookmarks)
    // console.log("handle clicked", blog);
  }
  return (
    <>
      <Header></Header>
      <div className="flex max-w-7xl mx-auto">
        <Blogs bookMarks={handleAddBookmarks}></Blogs>
        <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
