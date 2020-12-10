import h from '@rex/h'
import Tarja from '@rex/tarja'
import Site from '@site'
import Hero from './hero'
import style from './style.css'

export default () =>
  <Site>
    <Hero />
    <section className={style.pricing__section} />
    <Tarja />
  </Site>
