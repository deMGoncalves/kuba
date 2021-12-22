import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'

export default () =>
  <Site>
    <Fragment slot='hot' />
    <Fragment slot='warm' />
    <Fragment slot='cold' />
  </Site>
