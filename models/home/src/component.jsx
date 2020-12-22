import h, { Fragment, Show } from '@rex/h'
import * as f from '@rex/f'
import style from './style.css'

export default (props, children) =>
  <>
    <Show if={children.header}>{children.header}</Show>
    <Show if={children.main}>
      <main className={style.home}>
        {children.main}
      </main>
    </Show>
    <Show if={children.footer}>{children.footer}</Show>
  </>
