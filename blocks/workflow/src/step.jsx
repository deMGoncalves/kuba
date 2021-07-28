import h from '@kuba/h'
import * as f from '@kuba/f'
import text from '@kuba/text'
import style from './style'

export default (props, i) =>
  <li className={style.workflow__li} data-index={f.inc(i)}>
    <text.Strong className={style.workflow__strong} master darker>{props.title}</text.Strong>
    <text.P className={style.workflow__p} master small>{props.description}</text.P>
  </li>
