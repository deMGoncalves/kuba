import h, { Fragment } from '@kuba/h'
import Hero from './hero'
import Marca from './marca'
import Material from './material'
import Pro from './pro'
import Site from '@kuba/site'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Hero />
      <Material />
      <Marca />
      <Pro />
    </Fragment>
  </Site>
