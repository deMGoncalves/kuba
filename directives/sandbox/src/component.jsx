import h, { Fragment, Hide, Show } from '@kuba/h'

export default (sandbox) =>
  <Fragment slot={sandbox.slot}>
    <Show if={sandbox.component}><sandbox.component { ...sandbox.props } /></Show>
    <Hide if={sandbox.component}><div /></Hide>
  </Fragment>
