import h from '@h'
import style from './style.css'

export default (attr, child) =>
  <a className={[style.link, attr.className]} href='#'>{ child }</a>
