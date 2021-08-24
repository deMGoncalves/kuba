import h from '@kuba/h'
import Show from '@kuba/show'
import style from './style'

export default (zone, children) =>
  <div className={[style.zone, zone.className]} slot={zone.slot}>
    <Show when={zone.onView}>{children}</Show>
  </div>
