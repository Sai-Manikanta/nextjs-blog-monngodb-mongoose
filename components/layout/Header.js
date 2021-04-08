import Link from 'next/link'

const Header = () => {
    return ( 
        <header className="bg-gray-100 text-gray-700 flex p-4 justify-between">
            <h1 className="font-black">
                <Link href="/">Logo</Link>
            </h1>
            <ul>
                <li>
                    <Link href="/blogs"><a className="px-2">Blogs</a></Link>
                    <Link href="/blogs/create"><a className="px-2">Create</a></Link>
                    <Link href="/about"><a className="px-2">About</a></Link>
                </li>
            </ul>
        </header>
     );
}
 
export default Header;