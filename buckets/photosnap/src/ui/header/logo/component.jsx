import h from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default (logo) =>
  <ui.Picture className={style.logo} onClick={() => logo.redirect()}>
    <source srcSet={logo.src} />
  </ui.Picture>
