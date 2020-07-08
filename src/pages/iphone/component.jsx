import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default () =>
  <s.Main>
    <s.Header />
    <section className={style.iPhone}>
      <nav className={style.iPhone__nav}>
        <s.Container className={style.iPhone__container}>
          <strong className={style.iPhone__name}>iPhone X🅁</strong>
          <data className={style.iPhone__price} value={'4.299'}>A partir de R$ 4.299</data>
        </s.Container>
      </nav>
    </section>
  </s.Main>
