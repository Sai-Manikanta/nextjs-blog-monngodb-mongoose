import BlogItem from "./BlogItem";

const BlogList = ({ title , blogs }) => {
    return ( 
        <div>
            <h2 className="text-2xl border-l-8 p-2 text-indigo-500">{ title }</h2>
            <div className="mt-5">
                { blogs.map(blog => (
                    <BlogItem key={blog._id} blog={blog} />
                )) }
            </div>
        </div>
     );
}
 
export default BlogList;