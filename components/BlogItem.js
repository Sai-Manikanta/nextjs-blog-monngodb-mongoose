import Link from 'next/link'

const BlogItem = ({ blog }) => {
    return ( 
        <Link href={`/blogs/${blog._id}`}>
            <div key={blog._id} className="my-4 p-6 rounded bg-indigo-100 text-gray-700">
                <h3 className="text-xl uppercase">{ blog.title }</h3>
                <span className="my-2 block">{ blog.likes } Likes</span>
                <Link href={`/blogs/${blog._id}`}><a>Read More</a></Link>
            </div>
        </Link>
     );
}
 
export default BlogItem;