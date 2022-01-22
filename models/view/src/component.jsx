import h, { Fragment } from '@kuba/h'
import Footer from '@kuba/footer'
import Header from './header'
import style from './style'

export default (site, children) =>
  <>
    <Header />
    <main className={[style.site__main, site.className]}>
      {children.main}
    </main>
    <Footer />
  </>
