import h, { Fragment } from '@kuba/h'
import Footer from '@kuba/footer'
import Zone from '@kuba/zone'
import style from './style.css'

export default (_site, children) =>
  <>
    {children.header}
    <main className={style.site__main}>
      {children.main}
    </main>
    <Zone className={style.site__zone}>
      <Footer className={style.site__footer} />
    </Zone>
  </>
