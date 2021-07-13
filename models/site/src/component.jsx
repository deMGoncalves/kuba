import h, { Fragment } from '@kuba/h'
import Async from '@kuba/async'
import Zone from '@kuba/zone'
import style from './style.css'

export default (_site, children) =>
  <>
    {children.header}
    <main className={style.site__main}>
      {children.main}
    </main>
    <Zone className={style.site__zone}>
      <Async className={style.site__footer} from={() => import('@kuba/footer' /* webpackChunkName: "footer" */)} />
    </Zone>
  </>
