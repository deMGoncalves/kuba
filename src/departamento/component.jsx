import h from '@h'
import Header from '@header'
import Footer from '@footer'

export default (attr) =>
  <main>
    <Header />
    <section>
      <h1>{ attr.path }</h1>
    </section>
    <Footer />
  </main>
