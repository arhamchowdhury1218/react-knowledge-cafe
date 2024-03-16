import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = ([]);

  const handleAddToBookmarks = blog =>{

    
    const newBookmarks = [...bookmarks, blog]

    console.log(newBookmarks)
    // setBookmarks(newBookmarks)
  }

  return (
    <>

      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>

        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>



    </>
  )
}

export default App