import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <footer className={style.footer}>
    <s.Container className={style.footer__container}>
      <div className={style.footer__div}>
        <img className={style.footer__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' loading='lazy' alt='mundo jrmod' />
        <h3 className={style.footer__h3}>mundo jrmod</h3>
        <p className={style.footer__p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <a className={style.footer__a}>saiba mais</a>
      </div>
      <div className={style.footer__div}>
        <img className={style.footer__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' loading='lazy' alt='chutando latas' />
        <h3 className={style.footer__h3}>chutando latas</h3>
        <p className={style.footer__p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <a className={style.footer__a}>saiba mais</a>
      </div>
      <div className={style.footer__div}>
        <img className={style.footer__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' loading='lazy' alt='parceiros e representantes' />
        <h3 className={style.footer__h3}>parceiros</h3>
        <p className={style.footer__p}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        <a className={style.footer__a}>saiba mais</a>
      </div>
      <div className={style.footer__div}>
        <img className={style.footer__img} src='https://dummyimage.com/40x40/1A1A1A/1A1A1A.png' loading='lazy' alt='contato' />
        <h3 className={style.footer__h3}>contato</h3>
        <p className={style.footer__p}>Rua Ministro Edmundo Lins, 199</p>
        <p className={style.footer__p}>Bairro Ferreira, SP - Brasil</p>
        <p className={style.footer__p}>+55 11 3881-9937</p>
        <p className={style.footer__p}>rossettijrmod@hotmail.com</p>
      </div>
    </s.Container>
  </footer>
