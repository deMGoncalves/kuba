import h from '@rex/h'
import Picture from '@rex/kit/src/picture'
import photosnap from './photosnap.png'
import style from './style.css'

export default (props) =>
  <Picture className={[style.logo, props.className]} onClick={() => location.assign('/')}>
    <source srcSet={photosnap} />
  </Picture>
