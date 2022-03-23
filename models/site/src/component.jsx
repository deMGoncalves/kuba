import h, { Fragment } from '@kuba/h'
import Header from './header'
import Lazy from '@kuba/lazy'
import style from './style'
import Zone from '@kuba/zone'

export default (site, children) =>
  <>
    <Header />
    {children.breadcrumb}
    <main className={[style.site__main, site.className]}>
      {children.main}
    </main>
    <Zone>
      <Lazy require={() => import('@kuba/footer' /* webpackChunkName: 'footer' */)} />
    </Zone>
    <Lazy require={() => import('@kuba/searchbar' /* webpackChunkName: 'searchbar' */)} />
    <Lazy require={() => import('@kuba/comparebar' /* webpackChunkName: 'comparebar' */)} />
    <Lazy require={() => import('@kuba/cookiebar' /* webpackChunkName: 'cookiebar' */)} />
    <Lazy require={() => import('@kuba/zoom' /* webpackChunkName: 'zoom' */)} />
  </>
