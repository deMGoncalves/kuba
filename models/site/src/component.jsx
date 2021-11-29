import h, { Fragment } from '@kuba/h'
import Header from '@kuba/header'
import Zone from '@kuba/zone'
import style from './style'

export default (site, children) =>
  <>
    <Header />
    <main className={[style.site__main, site.className]}>
      {children.hot}
      <Zone>
        {children.warm}
      </Zone>
      <Zone>
        {children.cold}
      </Zone>
    </main>
  </>
