import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import style from './style'

export default (zone, children) =>
  <>
    <Show when={zone.onView}>{children}</Show>
    <Hide when={zone.onView}><div className={[style.zone, zone.className]} /></Hide>
  </>
