import h from '@rex/htmlparser'
import Picture from '@rex/picture'
import * as mapper from './mapper'
import style from './style.css'

export default new Proxy({}, {
  get: (_, icon) =>
    (props) =>
      <Picture className={[style.icon, props.className]}>
        <source srcSet={mapper[icon]} />
      </Picture>

})
