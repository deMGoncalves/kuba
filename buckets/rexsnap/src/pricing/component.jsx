import h, { Repeat } from '@rex/h'
import * as ui from '@ui'
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

      <p className={style.pricing__heading}>Compare</p>
      <Table className={style.pricing__table} features={features} />
    </section>

    <ui.Tarja />
  </Site>
