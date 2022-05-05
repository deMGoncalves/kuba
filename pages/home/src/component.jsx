import h, { Fragment } from '@kuba/h'
import Hero from './hero'
import Marca from './marca'
import Material from './material'
import Pro from './pro'
import Site from '@kuba/site'
import style from './style'
import Zone from '@kuba/zone'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Hero />
      <Zone className={style.home__shelf}>
        <Material />
      </Zone>
      <Zone className={style.home__shelf}>
        <Marca />
      </Zone>
      <Zone className={style.home__shelf}>
        <Pro />
      </Zone>
    </Fragment>
  </Site>
