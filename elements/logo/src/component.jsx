import h from '@rex/htmlparser'
import Picture from '@rex/picture'
import style from './style.css'

export default (logo) =>
  <div className={[style.logo, logo.className]} onClick={() => logo.redirect()}>
    <Picture className={style.logo__picture}>
      <source srcSet={logo.thumbnail} />
    </Picture>
  </div>
