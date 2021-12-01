import h, { Fragment } from '@kuba/h'
import Hero from '@kuba/hero'
import Site from '@kuba/site'

export default () =>
  <Site>
    <Fragment slot='hot'>
      <Hero />
    </Fragment>
  </Site>
