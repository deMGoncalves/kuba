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

      <Card title='Pro' price='39.00' type='negative'>
        More advanced features available. Recommended for photography veterans and professionals.
      </Card>

      <Card title='Business' price='99.00'>
        Additional features available such as more detailed metrics. Recommended for business owners.
      </Card>

      {/*
        <table className={style.pricing__table}>
        <thead>
          <tr>
            <th colSpan='3'>The Features</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan='3'>Unlimited Story Posting</th>
          </tr>
          <tr>
            <td>Basic</td>
            <td>Pro</td>
            <td>Business</td>
          </tr>
        </tbody>
      </table>
      */}
    </section>

    <ui.Tarja className={style.pricing__tarja} />
    <ui.Footer className={style.pricing__footer} />
  </main>
