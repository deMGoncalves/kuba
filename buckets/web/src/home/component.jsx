import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import Material from './material'
import Pro from './pro'
import Relevantes from './relevantes'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Relevantes />
      <Material />
      <Pro />
    </Fragment>
  </Site>
