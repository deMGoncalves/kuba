import h from '@h'
import Header from '@header'
import Footer from '@footer'

export default (attr) =>
  <main>
    <Header />
    <section>
      <h1>{ attr.router }</h1>
    </section>
    <Footer />
  </main>
