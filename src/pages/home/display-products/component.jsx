import h from '@h'
import * as s from '@share'
import style from './style.css'

const banner = 'https://dummyimage.com/293x400/1a1a1a/1a1a1a'

export default () =>
  <section className={style.banner}>
    <s.Container className={style.banner__container}>
      <h2 className={style.banner__h2}>recomendamos alguns produtos</h2>
      <div className={style.banner__div}>
        <picture className={style.banner__picture}>
          <img className={style.banner__img} src={banner} loading='lazy' alt='product' />
        </picture>
        <p className={style.banner__p}>product namd</p>
        <data className={style.banner__data} value='999.99'>R$ 999,99</data>
      </div>
    </s.Container>
  </section>
