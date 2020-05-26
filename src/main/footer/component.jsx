import h from '@h'
import * as s from '@share'
import style from './style.css'

export default () =>
  <footer className={style.footer}>
    <s.Container className={style.footer__container}>
      <nav className={style.footer__nav}>
        <div className={style.footer__div}>
          <h3 className={style.footer__h3}>mundo jrmod</h3>
          <ul className={style.footer__ul}>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>Novidades</a></li>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>Curiosidades</a></li>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>Dicas</a></li>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>Certificado e Garantia JRMod</a></li>
          </ul>
        </div>
        <div className={style.footer__div}>
          <h3 className={style.footer__h3}>chutando latas</h3>
          <ul className={style.footer__ul}>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>Quem Somos</a></li>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>Depoimentos</a></li>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>O que fazemos?</a></li>
          </ul>
        </div>
        <div className={style.footer__div}>
          <h3 className={style.footer__h3}>parceiros e representantes</h3>
          <ul className={style.footer__ul}>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>Monte Allums</a></li>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>General Guitar Gadgets</a></li>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>Guitar Tone</a></li>
          </ul>
        </div>
        <div className={style.footer__div}>
          <h3 className={style.footer__h3}>contato</h3>
          <ul className={style.footer__ul}>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>Quem somos</a></li>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>Depoimentos</a></li>
            <li className={style.footer__li}><a className={style.footer__a} href='#'>O que fazemos?</a></li>
          </ul>
        </div>
      </nav>
    </s.Container>
  </footer>
