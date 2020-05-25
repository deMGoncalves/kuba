import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.benefits}>
    <s.Container>
      <ul className={style.benefits__ul}>
        <li className={style.benefits__li}>
          <img className={style.benefits__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' alt='benefits' />
          <a href='#' className={style.benefits__a}>Atualização e Garantia vitalícia dos pedais da Série A</a>
        </li>
        <li className={style.benefits__li}>
          <img className={style.benefits__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' alt='benefits' />
          <a href='#' className={style.benefits__a}>Pedais absolutamente fiéis aos seus propósitos e cumprem 100% de suas propostas</a>
        </li>
        <li className={style.benefits__li}>
          <img className={style.benefits__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' alt='benefits' />
          <a href='#' className={style.benefits__a}>Parceria com os grandes representantes globais em Modificações/Customizações de pedais</a>
        </li>
        <li className={style.benefits__li}>
          <img className={style.benefits__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' alt='benefits' />
          <a href='#' className={style.benefits__a}>Produto confeccionado com primor e coração ou paixão ou outra qualidade profunda</a>
        </li>
      </ul>
    </s.Container>
  </section>
