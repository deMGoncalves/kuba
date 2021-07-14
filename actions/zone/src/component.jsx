import h, { Fragment, Hide, Show } from '@kuba/h'

export default (zone, children) =>
  <Fragment slot={zone.slot}>
    <Show if={zone.onView}>{children}</Show>
    <Hide if={zone.onView}><div /></Hide>
  </Fragment>
