import h, { Fragment } from '@kuba/h'
import Comparebar from '@kuba/comparebar'
import Footer from '@kuba/footer'
import Header from './header'
import style from './style'

export default (_site, children) =>
  <>
    <Header />
    <Comparebar />
    <main className={style.site__main}>
      {children.main}
    </main>
    {children.breadcrumb}
    <Footer />
  </>
