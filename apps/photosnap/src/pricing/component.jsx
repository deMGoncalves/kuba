import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import Hero from './hero'
import Card from './card'
import Table from './table'
import Switch from './switch'
import style from './style.css'

import features from './schema'

export default () =>
  <main className={style.pricing}>
    <ui.Header />
    <Hero />

    <section>
      <Switch />

      <Card title='Basic' price='19.00'>
        Includes basic usage of our platform. Recommended for new and aspiring photographers.
      </Card>

      <Card title='Pro' price='39.00' type='negative'>
        More advanced features available. Recommended for photography veterans and professionals.
      </Card>

      <Card title='Business' price='99.00'>
        Additional features available such as more detailed metrics. Recommended for business owners.
      </Card>

      <Table features={features} />
    </section>

    <ui.Tarja />
    <ui.Footer />
  </main>
