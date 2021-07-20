import h, { Fragment } from '@kuba/h'
import Flag from '@kuba/flag'
import Lazy from '@kuba/lazy'
import Zone from '@kuba/zone'
import style from './style.css'

export default (_site, children) =>
  <>
    <Flag className={style.site__flag} />
    {children.header}
    <main className={style.site__main}>
      {children.main}
    </main>
    <Zone className={style.site__zone}>
      <Lazy className={style.site__footer} require={() => import('@kuba/footer')} />
    </Zone>
  </>
