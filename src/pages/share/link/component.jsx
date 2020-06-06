import h from '@h'
import * as f from '@f'
import style from './style.css'

export default (attr, child) =>
  <a className={[style.link, attr.className]} href={f.or(attr.href, '#')}>{ child }</a>
