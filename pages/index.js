import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-52 flex justify-center items-center">
      <Head>
        <title>Api Routes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-5xl text-indigo-600">Next Js Api Routes...</h1>
      </div>
    </div>
  )
}
