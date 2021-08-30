import h from '@kuba/h'
import * as f from '@kuba/f'
import text from '@kuba/text'
import style from './style'

export default (step, i) =>
  <li className={style.workflow__li} data-index={f.inc(i)}>
    <text.Strong className={style.workflow__text} master darker medium>{step.title}</text.Strong>
    <text.P className={style.workflow__text} master xxxs>{step.description}</text.P>
  </li>
