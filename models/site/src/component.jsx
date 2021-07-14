import h, { Fragment } from '@kuba/h'
import Lazy from '@kuba/lazy'
import Zone from '@kuba/zone'
import style from './style.css'

export default (_site, children) =>
  <>
    {children.header}
    <main className={style.site__main}>
      {children.main}
    </main>
    <Zone>
      <Lazy className={style.site__footer} require={() => import('@kuba/footer' /* webpackChunkName: "footer" */)} />
    </Zone>
  </>
