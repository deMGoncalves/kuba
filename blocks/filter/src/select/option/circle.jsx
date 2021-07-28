import h, { Hide, Show } from '@kuba/h'
import icon from '@kuba/icon'
import style from './style'

export default (option) =>
  <div>
    <Show if={option.checked}><icon.CircleChecked className={style.option__icon} small /></Show>
    <Hide if={option.checked}><icon.Circle className={style.option__icon} small /></Hide>
  </div>
