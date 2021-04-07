import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Head>
        <title>Api Routes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-5xl text-indigo-600">Next Js Api Routes...</h1>
        <ul className="border mt-4 p-4">
          <li>
            <Link href="/blogs">
              <a className="underline text-blue-600">/blogs</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
