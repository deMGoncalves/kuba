import h from '@rex/h'
import * as ui from '@rex/kit'
import photosnap from './photosnap.png'
import style from './style.css'

export default (props) =>
  <ui.Picture className={[style.logo, props.className]} onClick={() => location.assign('/')}>
    <source srcSet={photosnap} />
  </ui.Picture>
