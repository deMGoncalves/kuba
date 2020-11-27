import h, { Repeat } from '@rex/h'
import Tarja from '@rex/tarja'
import text from '@rex/text'
import Site from '@site'
import Card from './card'
import Hero from './hero'
import Switch from './switch'
import Table from './table'
import features from './schema'
import style from './style.css'

export default (pricing) =>
  <Site>
    <Hero />
    <section className={style.pricing__content} data-pricing='month'>
      <Switch className={style.pricing__switch} />
      <Repeat iterator={pricing.data} component={Card} />
      <text.P className={style.pricing__heading}>Compare</text.P>
      <Table className={style.pricing__table} features={features} />
    </section>
    <Tarja />
  </Site>
