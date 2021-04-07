import dbConnect from '../../utils/dbConnect'
import Blog from '../../models/Blog'

const BlogPage = ({ blog }) => {
    const parsedBlog = JSON.parse(blog);
    console.log(parsedBlog);

    return ( 
        <div className="text-gray-800">
            <h1 className="my-4 text-2xl">{ parsedBlog.title }</h1>
            <p>{ parsedBlog.body }</p>
            <span className="mt-4 block">Likes { parsedBlog.likes }</span>
        </div>
     );
}
 
export default BlogPage;

export async function getStaticProps(context){

    const { id } = context.params;

    await dbConnect();

    const blog = await Blog.findById(id);

    return {
        props: {
            blog: JSON.stringify(blog)
        }
    }
}

export async function getStaticPaths(){

    await dbConnect();

    const blogs = await Blog.find({});

    const pathsWithParams = blogs.map(blog => ({ params: { id: blog._id.toString() } }));

    return {
        paths: pathsWithParams,
        fallback: false 
    };
}