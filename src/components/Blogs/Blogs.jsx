import { useEffect, useState } from "react"

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []) 
  return (
    <div><h1 className="text-4xl font-bold">Blogs</h1>
        {/* {
            blogs.map(blog => <div key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
            </div>)
        } */}
    </div>
  )
}

export default Blogs