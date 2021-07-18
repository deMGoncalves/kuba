import h, { Show } from '@kuba/h'

export default (zone, children) =>
  <div className={zone.className} slot={zone.slot}>
    <Show if={zone.onView}>{children}</Show>
  </div>
