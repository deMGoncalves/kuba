import h from '@rex/htmlparser'
import text from '@rex/text'
import Picture from '@rex/picture'
import style from './style.css'

export default (logo) =>
  <div className={style.logo} onClick={() => logo.redirect()}>
    <Picture className={style.logo__picture}>
      <source srcSet={logo.thumbnail} />
    </Picture>
    <text.H1 className={style.logo__heading} size='large' color={logo.color}>{logo.name}</text.H1>
  </div>
