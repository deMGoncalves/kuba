import h from '@h'
import Header from '@header'
import Footer from '@footer'

export default (path) =>
  <main>
    <Header />
    { path }
    <Footer />
  </main>
