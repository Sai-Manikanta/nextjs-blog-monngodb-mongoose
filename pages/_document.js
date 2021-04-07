import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="max-w-screen-md mx-auto font-raleway">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
