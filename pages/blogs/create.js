import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const BlogCreatePage = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [likes, setLikes] = useState("");

    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const blog = { title, body, likes };

        // send post request to api /api/blogs
        axios.post('/api/blogs', blog)
          .then(res => {
            router.push('/blogs')
          })
          .catch(err => console.log(err))
    }

    return ( 
        <div className="p-8 m-4 sm:mx-0 bg-gray-100 text-gray-600 rounded">
            <h1 className="text-2xl mb-4 font-semibold">Create Blog</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input type="text" className="p-2 border rounded" required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea type="text" className="p-2 border rounded mt-3" required placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <input type="text" className="p-2 border rounded mt-3" required placeholder="Likes" value={likes} onChange={(e) => setLikes(e.target.value)} />
                <button className="bg-indigo-500 text-indigo-100 p-1 rounded mt-5">Create</button>
            </form>
        </div>
     );
}
 
export default BlogCreatePage;