import h, { Fragment } from '@kuba/h'
import Footer from '@kuba/footer'
import Header from '@kuba/header'
import style from './style.css'

export default (_site, children) =>
  <>
    <Header className={style.site__header} />
    <main className={style.site__main}>
      {children}
    </main>
    <Footer className={style.site__footer} />
  </>
