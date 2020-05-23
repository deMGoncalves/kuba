import h from '@h'
import Header from '@header'
import Footer from '@footer'

export default (path) =>
  <main>
    <Header />
    <section>
      <h1>{ path }</h1>
    </section>
    <Footer />
  </main>
