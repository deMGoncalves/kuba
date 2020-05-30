import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <footer className={style.footer}>
    <s.Container className={style.footer__container}>
      <section className={style.footer__section}>
        <s.Icon className={style.footer__icon}>public</s.Icon>
        <h3 className={style.footer__h3}>mundo JRMod</h3>
        <p className={style.footer__p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <a className={style.footer__a}>saiba mais</a>
      </section>
      <section className={style.footer__section}>
        <s.Icon className={style.footer__icon}>directions_run</s.Icon>
        <h3 className={style.footer__h3}>chutando latas</h3>
        <p className={style.footer__p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <a className={style.footer__a}>saiba mais</a>
      </section>
      <section className={style.footer__section}>
        <s.Icon className={style.footer__icon}>supervisor_account</s.Icon>
        <h3 className={style.footer__h3}>parceiros</h3>
        <p className={style.footer__p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <a className={style.footer__a}>saiba mais</a>
      </section>
      <section className={style.footer__section}>
        <address className={style.footer__address} itemProp='address' itemScope itemType='http://schema.org/PostalAddress'>
          <s.Icon className={style.footer__icon}>location_on</s.Icon>
          <h3 className={style.footer__h3}>contato</h3>
          <p className={style.footer__p} itemProp='streetAddress'>Rua Ministro Edmundo Lins, 199</p>
          <p className={style.footer__p} itemProp='postalCode'>05523-000</p>
          <p className={style.footer__p}><span itemProp='addressLocality'>Bairro Ferreira</span>, <span itemProp='addressRegion'>SP</span> - <span itemProp='addressCountry'>Brasil</span></p>
          <p className={style.footer__p} itemProp='telephone'>+55 11 3881-9937</p>
          <p className={style.footer__p} itemProp='email'>rossettijrmod@hotmail.com</p>
        </address>
      </section>
    </s.Container>
  </footer>
