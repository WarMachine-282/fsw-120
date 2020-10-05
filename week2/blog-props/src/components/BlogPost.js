import React from "react"
import Bloglist from "../blogList"
import BlogProps from "../BlogProps"

function BlogPost() {
    const BlogItems = Bloglist.map(blog => <BlogProps title={blog.title} subTitle={blog.subTitle} author={blog.author} date={blog.date} />)

    return (
        <div className="boxes">
            {BlogItems}
            <div>
                <hr></hr>
            </div>
        </div>
    )
    }
    export default BlogPost;