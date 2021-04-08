import dbConnect from '../../utils/dbConnect'
import Blog from '../../models/Blog'
import axios from 'axios'
import { useRouter } from 'next/router'

const BlogPage = ({ blog }) => {
    const parsedBlog = JSON.parse(blog);

    const router = useRouter();

    const updateBlog = (blogId) => {
        router.push(`/blogs/update/${blogId}`);
    }

    const deleteBlog = (blogId) => {
        axios.delete(`/api/blogs/${blogId}`)
          .then(res => {
            router.replace('/blogs');
          })
          .catch(err => console.log(err))
    }

    return ( 
        <div className="text-gray-800 p-4">
            <h1 className="my-4 text-2xl">{ parsedBlog.title }</h1>
            <p>{ parsedBlog.body }</p>
            <span className="mt-4 block">Likes { parsedBlog.likes }</span>
            <button className="bg-green-500 py-1 px-3 text-sm text-white rounded focus:outline-none mt-4 mr-4 hover:bg-green-700" onClick={() => updateBlog(parsedBlog._id)}>Update</button>
            <button className="bg-red-500 py-1 px-3 text-sm text-white rounded focus:outline-none mt-4 hover:bg-red-700" onClick={() => deleteBlog(parsedBlog._id)}>Delete</button>
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