import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default (page) =>
  <s.Main>
    <s.Container className={style.product}>
      <s.Image className={style.product__image} alt={page.title}>
        <source srcSet={page.image[0]} />
      </s.Image>
      <div className={style.product__div}>
        <h1 className={style.product__title}>{ page.title }</h1>
        <data className={style.product__price} value='1329.05'>R$ 1.329,05</data>
        <p className={style.product__description}>{ page.description }</p>
        <h2 className={style.product__color}>Cores</h2>
        <ul className={style.colors}>
          <li className={style.colors__white} />
          <li className={style.colors__black} />
          <li className={style.colors__purple} />
        </ul>
      </div>
    </s.Container>
  </s.Main>
