import h, { Hide, Show } from '@kuba/h'
import text from '@kuba/text'
import Circle from './circle'
import Square from './square'
import style from './style.css'

export default (option) =>
  <div className={style.option} onClick={() => option.toggle()}>
    <Show if={option.multiselect}><Square checked={option.checked} /></Show>
    <Hide if={option.multiselect}><Circle checked={option.checked} /></Hide>
    <text.Master className={style.option__text} darker small>{option.value}</text.Master>
  </div>
