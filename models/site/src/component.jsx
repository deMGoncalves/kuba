import h, { Fragment } from '@kuba/h'
import Flag from '@kuba/flag'
import Header from '@kuba/header'
import Lazy from '@kuba/lazy'
import Splash from '@kuba/splash'
import Zone from '@kuba/zone'
import style from './style'

export default (_site, children) =>
  <>
    <Header className={style.site__header} />
    <main className={style.site__main}>
      {children.hot}
      <Zone>
        {children.warm}
      </Zone>
      <Zone>
        {children.cold}
      </Zone>
    </main>
    <Zone>
      <Lazy require={() => import('@kuba/footer' /* webpackChunkName: "footer" */)} />
    </Zone>
    <Splash className={style.site__splash} id='kuba.v0.0.1' />
    <Flag className={style.site__flag} />
  </>
