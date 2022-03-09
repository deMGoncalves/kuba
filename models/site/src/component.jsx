import h, { Fragment } from '@kuba/h'
import Footer from '@kuba/footer'
import Lazy from '@kuba/lazy'
import Zone from '@kuba/zone'
import Header from './header'
import style from './style'

export default (site, children) =>
  <>
    <Header />
    {children.breadcrumb}
    <main className={[style.site__main, site.className]}>
      {children.main}
    </main>
    <Zone>
      <Footer />
    </Zone>
    <Lazy require={() => import('@kuba/searchbar' /* webpackChunkName: 'searchbar' */)} />
    <Lazy require={() => import('@kuba/comparebar' /* webpackChunkName: 'comparebar' */)} />
    <Lazy require={() => import('@kuba/cookiebar' /* webpackChunkName: 'cookiebar' */)} />
    <Lazy require={() => import('@kuba/zoom' /* webpackChunkName: 'zoom' */)} />
  </>
