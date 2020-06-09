import h from '@h'
import style from './style.css'

export default (attr, child) =>
  <span className={[style.icon, style[`icon__${child}`], attr.className]} />
