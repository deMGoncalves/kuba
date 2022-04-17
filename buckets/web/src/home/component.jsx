import h, { Fragment } from '@kuba/h'
import Hero from './hero'
import Marca from './marca'
import Material from './material'
import Pro from './pro'
import Site from '@kuba/site'
import Zone from '@kuba/zone'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Hero />
      <Material />
      <Zone>
        <Marca />
        <Pro />
      </Zone>
    </Fragment>
  </Site>
