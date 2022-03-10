import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'

export default (sandbox) =>
  <>
    <Show when={sandbox.component}>{sandbox.component}</Show>
    <Hide when={sandbox.component}><div /></Hide>
  </>
