import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.benefits}>
    <s.Container>
      <ul className={style.benefits__ul}>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>admin_panel_settings</s.Icon>
          <a href='#' className={style.benefits__a}>atualização e garantia vitalícia dos pedais da série a</a>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>verifed</s.Icon>
          <a href='#' className={style.benefits__a}>pedais absolutamente fiéis e cumprindo com 100% de efetividade o seu papel</a>
        </li>
        <li className={style.benefits__li}>
          <img className={style.benefits__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' loading='lazy' alt='benefits' />
          <a href='#' className={style.benefits__a}>parceria com os grandes representantes globais em modificações/customizações de pedais</a>
        </li>
        <li className={style.benefits__li}>
          <img className={style.benefits__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' loading='lazy' alt='benefits' />
          <a href='#' className={style.benefits__a}>produto confeccionado com primor e coração ou paixão ou outra qualidade profunda</a>
        </li>
      </ul>
    </s.Container>
  </section>
