import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'

export default (sandbox) =>
  <Fragment slot={sandbox.slot}>
    <Show when={sandbox.component}><sandbox.component { ...sandbox.props } /></Show>
    <Hide when={sandbox.component}><div /></Hide>
  </Fragment>
