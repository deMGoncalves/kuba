import h from '@h'
import * as s from '@pages/share'
import Nav from './nav'
import style from './style.css'

export default () =>
  <s.Main>
    <s.Header />
    <section className={style.iPhone}>
      <Nav />
    </section>
  </s.Main>
