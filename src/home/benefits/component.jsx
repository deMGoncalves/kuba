import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.benefits}>
    <s.Container>
      <ul className={style.benefits__ul}>
        <li className={style.benefits__li}>
          <img className={style.benefits__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' alt='benefits' />
          <a href='#' className={style.benefits__a}>Atualizações gratuitas disponíveis para nossas mods “Serie A”</a>
        </li>
        <li className={style.benefits__li}>
          <img className={style.benefits__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' alt='benefits' />
          <a href='#' className={style.benefits__a}>Representante Exclusivo Oficial General Guitar Gadgets – America do Sul</a>
        </li>
        <li className={style.benefits__li}>
          <img className={style.benefits__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' alt='benefits' />
          <a href='#' className={style.benefits__a}>Representante e Instalador Oficial dos produtos Monte Allums no Brasil</a>
        </li>
        <li className={style.benefits__li}>
          <img className={style.benefits__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' alt='benefits' />
          <a href='#' className={style.benefits__a}>“Não instala” oficialmente modificações de livros Públicos (WAMPLER) ou Internet</a>
        </li>
      </ul>
    </s.Container>
  </section>
