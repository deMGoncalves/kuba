import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <section className={style.benefits}>
    <s.Container>
      <ul className={style.benefits__ul}>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>supervised_user_circle</s.Icon>
          <a href='#' className={style.benefits__a}>parceria com os grandes representantes globais</a>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>admin_panel_settings</s.Icon>
          <a href='#' className={style.benefits__a}>atualização e garantia vitalícia dos pedais da série a</a>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>verified</s.Icon>
          <a href='#' className={style.benefits__a}>pedais fiéis e cumprindo com 100% de efetividade</a>
        </li>
        <li className={style.benefits__li}>
          <s.Icon className={style.benefits__icon}>loyalty</s.Icon>
          <a href='#' className={style.benefits__a}>produto confeccionado com paixão e qualidade profunda</a>
        </li>
      </ul>
    </s.Container>
  </section>
