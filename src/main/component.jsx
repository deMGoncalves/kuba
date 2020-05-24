import h from '@h'
import Header from '@header'
import Footer from '@footer'

export default (_, chield) =>
  <main>
    <Header />
    { chield }
    <Footer />
  </main>
