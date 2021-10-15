import h, { Fragment } from '@kuba/h'
import Zone from '@kuba/zone'
import style from './style'

export default (site, children) =>
  <>
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
