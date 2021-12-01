import h, { Fragment } from '@kuba/h'
import * as f from '@kuba/f'
import Header from '@kuba/header'
import Show from '@kuba/show'
import Zone from '@kuba/zone'
import style from './style'

export default (site, children) =>
  <>
    <Header />
    <main className={[style.site__main, site.className]}>
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
  </>
