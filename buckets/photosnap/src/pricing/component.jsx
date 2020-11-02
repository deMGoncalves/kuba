import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import Card from './card'
import Hero from './hero'
import Switch from './switch'
import Table from './table'
import Template from '@template'
import style from './style.css'
import features from './schema'

export default () =>
  <Template>
    <Hero />
    <section className={style.pricing__content} data-pricing='month'>
      <Switch className={style.pricing__switch} />

      <Card className={style.pricing__card} title='Basic' priceMonth='19.00' priceYear='190.00'>
        Includes basic usage of our platform. Recommended for new and aspiring photographers.
      </Card>

      <Card className={style.pricing__card} title='Pro' priceMonth='39.00' priceYear='390.00' type='negative'>
        More advanced features available. Recommended for photography veterans and professionals.
      </Card>

      <Card className={style.pricing__card} title='Business' priceMonth='99.00' priceYear='990.00'>
        Additional features available such as more detailed metrics. Recommended for business owners.
      </Card>

      <p className={style.pricing__heading}>Compare</p>
      <Table className={style.pricing__table} features={features} />
    </section>

    <ui.Tarja />
  </Template>
