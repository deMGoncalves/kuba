import h from '@rex/htmlparser'
import text from '@rex/text'
import Picture from '@rex/picture'
import style from './style.css'

export default (logo) =>
  <div className={style.logo} onClick={() => logo.redirect()}>
    <Picture className={style.logo__picture}>
      <source srcSet={logo.thumbnail} />
    </Picture>
    {h(text[logo.tagName], { className: style.logo__heading, color: logo.color, size: 'large' }, logo.name)}
  </div>
