import h from '@h'
import Header from '@header'
import Footer from '@footer'

export default (attr) =>
  <main>
    <Header />
    <section>
      <h1>{ attr.departamento } / { attr.categoria }</h1>
    </section>
    <Footer />
  </main>
