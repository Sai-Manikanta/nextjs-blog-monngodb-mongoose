import dbConnect from '../../utils/dbConnect'
import Blog from '../../models/Blog'
import BlogList from '../../components/BlogList';

const BlogHomePage = ({ blogs }) => {
    const parsedBlogs = JSON.parse(blogs);

    return ( 
        <div>
            <h1 className="my-5 text-3xl pb-3 border-b-2 border-indigo-400">All Blogs</h1>
            <BlogList title="Latest blogs" blogs={parsedBlogs} />
        </div>
     );
}
 
export default BlogHomePage;

export async function getStaticProps(){

    await dbConnect();

    const blogs = await Blog.find({});

    return {
        props: {
            blogs: JSON.stringify(blogs)
        }
    }

}
  