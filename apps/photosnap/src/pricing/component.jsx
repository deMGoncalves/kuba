import h, { Fragment } from '@rex/h'
import * as ui from '@rex/kit'
import banner from './banner'
import Card from './card'
import style from './style.css'

export default () =>
  <main className={style.pricing}>
    <ui.Header className={style.pricing__header} />
    {banner}

    <section>
      <Card title='Basic' price='19.00'>
        Includes basic usage of our platform. Recommended for new and aspiring photographers.
      </Card>
    </section>

    <ui.Tarja className={style.pricing__tarja} />
    <ui.Footer className={style.pricing__footer} />
  </main>
