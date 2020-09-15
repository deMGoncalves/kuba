import h from '@rex/h'
import * as c from '@components'
import photosnap from './photosnap.png'
import style from './style.css'

export default (props) =>
  <c.Picture className={[style.logo, props.className]} onClick={() => location.assign('/')}>
    <source srcSet={photosnap} />
  </c.Picture>
