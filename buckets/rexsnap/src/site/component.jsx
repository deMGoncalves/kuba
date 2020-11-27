import h from '@rex/h'
import Footer from '@rex/footer'
import Header from '@rex/header'
import style from './style.css'

export default (site, children) =>
  <main className={[style.template, site.className]}>
    <Header />
    {children}
    <Footer />
  </main>
