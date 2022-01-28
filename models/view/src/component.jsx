import h, { Fragment } from '@kuba/h'
import Footer from '@kuba/footer'
import Header from './header'
import style from './style'

export default (view, children) =>
  <>
    <Header />
    <main className={[style.view__main, view.className]}>
      {children.main}
    </main>
    <Footer />
  </>
