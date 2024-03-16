import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6

const Blogs = ({handleAddToBookmarks}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {


        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))



    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blogs.Id}
                    blog={blog}
                    handleAddToBookmarks ={handleAddToBookmarks}
                ></Blog>)
            }

        </div>
    );
};


Blogs.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.function
}
export default Blogs;