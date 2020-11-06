import h from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default (logo) =>
  <div className={style.logo}>
    <ui.Picture className={style.logo__picture} onClick={() => logo.redirect()}>
      <source srcSet={logo.src} />
    </ui.Picture>
    <ui.Heading className={style.logo__heading} size='large'>{logo.name}</ui.Heading>
  </div>
