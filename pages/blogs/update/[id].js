import { useState } from 'react'
import dbConnect from '../../../utils/dbConnect'
import Blog from '../../../models/Blog'
import axios from 'axios'
import { useRouter } from 'next/router'

const BlogUpdatePage = ({ blog }) => {
    const parsedBlog = JSON.parse(blog);

    const [title, setTitle] = useState(parsedBlog.title);
    const [body, setBody] = useState(parsedBlog.body);
    const [likes, setLikes] = useState(parsedBlog.likes);

    const router = useRouter();
    const { id } = router.query;

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedBlog = { title, body, likes };

        axios.put(`/api/blogs/${id}`, updatedBlog)
            .then(res => {
                router.replace('/blogs')
            })
            .catch(err => console.log(err));
    }

    return ( 
        <div className="p-8 m-4 sm:mx-0 bg-gray-100 text-gray-600 rounded">
            <h1 className="text-2xl mb-4 font-semibold">Update Blog</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" className="p-2 border rounded" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea type="text" className="p-2 border rounded mt-3" required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <input type="text" className="p-2 border rounded mt-3" required value={likes} onChange={(e) => setLikes(e.target.value)} />
                <button className="bg-green-500 text-green-100 p-1 rounded mt-5">Update</button>
            </form>
        </div>
     );
}
 
export default BlogUpdatePage;

export async function getServerSideProps(context) {

    const { id } = context.params;

    await dbConnect();

    const blog = await Blog.findById(id);

    return {
      props: {
          blog: JSON.stringify(blog)
      }, // will be passed to the page component as props
    }
}