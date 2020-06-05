import h from '@h'
import * as s from '@pages/share'
import style from './style.css'

export default () =>
  <footer className={style.footer}>
    <s.Container className={style.footer__container}>
      <section className={style.footer__section}>
        <s.Icon className={style.footer__icon}>public</s.Icon>
        <h3 className={style.footer__h3}>mundo JRMod</h3>
        <p className={style.footer__p}>bem vindo a família JRMod</p>
        <a className={style.footer__a}>saiba mais</a>
      </section>
      <section className={style.footer__section}>
        <s.Icon className={style.footer__icon}>directions_run</s.Icon>
        <h3 className={style.footer__h3}>chutando latas</h3>
        <p className={style.footer__p}>fique por dentro de tudo</p>
        <a className={style.footer__a}>saiba mais</a>
      </section>
      <section className={style.footer__section}>
        <s.Icon className={style.footer__icon}>people_outline</s.Icon>
        <h3 className={style.footer__h3}>parceiros</h3>
        <p className={style.footer__p}>conheça nossos parceiros</p>
        <a className={style.footer__a}>saiba mais</a>
      </section>
      <section className={style.footer__section}>
        <address className={style.footer__address}>
          <s.Icon className={style.footer__icon}>location_on</s.Icon>
          <h3 className={style.footer__h3}>contato</h3>
          <p className={style.footer__p}>Rua Ministro Edmundo Lins, 199</p>
          <p className={style.footer__p}>05523-000</p>
          <p className={style.footer__p}>Bairro Ferreira, SP - Brasil</p>
          <p className={style.footer__p}>+55 11 3881-9937</p>
          <p className={style.footer__p}>rossettijrmod@hotmail.com</p>
        </address>
      </section>
    </s.Container>
  </footer>
