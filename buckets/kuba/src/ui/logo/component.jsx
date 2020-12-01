import h from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default (logo) =>
  <div className={style.logo} onClick={() => logo.redirect()}>
    <ui.Picture className={style.logo__picture}>
      <source srcSet={logo.thumbnail} />
    </ui.Picture>
    <ui.Heading className={style.logo__heading} size='large' color={logo.color}>{logo.name}</ui.Heading>
  </div>
