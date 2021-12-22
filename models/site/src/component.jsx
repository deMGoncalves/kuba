import h, { Fragment } from '@kuba/h'
import * as f from '@kuba/f'
import Header, { Logo, Nav } from '@kuba/header'
import Lazy from '@kuba/lazy'
import Show from '@kuba/show'
import Zone from '@kuba/zone'
import style from './style'

export default (site, children) =>
  <>
    <Header>
      <Logo />
      <Nav />
    </Header>
    <main className={style.site__main}>
      {children.hot}
      <Show when={f.len(children.warm)}>
        <Zone>
          {children.warm}
        </Zone>
      </Show>
      <Show when={f.len(children.cold)}>
        <Zone>
          {children.cold}
        </Zone>
      </Show>
    </main>
    <Zone>
      <Lazy require={() => import('@kuba/footer' /* webpackChunkName: 'footer' */)} />
    </Zone>
  </>
