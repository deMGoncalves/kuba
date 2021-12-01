import h, { Fragment } from '@kuba/h'
import Hero from '@kuba/hero'
import Site from '@kuba/site'

export default () =>
  <Site>
    <Hero slot='hot' />
  </Site>
