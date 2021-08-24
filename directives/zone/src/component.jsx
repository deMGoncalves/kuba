import h, { Show } from '@kuba/h'
import style from './style'

export default (zone, children) =>
  <div className={[style.zone, zone.className]} slot={zone.slot}>
    <Show if={zone.onView}>{children}</Show>
  </div>
