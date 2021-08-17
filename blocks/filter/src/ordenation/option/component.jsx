import h, { Fragment, Hide, Show } from '@kuba/h'
import icon from '@kuba/icon'
import text from '@kuba/text'
import style from './style'

export default (option) =>
  <>
    <Show if={option.selected}>
      <li className={style.option} onClick={() => option.unselect()}>
        <icon.CircleChecked className={style.option__icon} small />
        <text.P className={style.option__strong} slot='caption' master darker small>{option.display}</text.P>
      </li>
    </Show>
    <Hide if={option.selected}>
      <li className={style.option} onClick={() => option.select()}>
        <icon.Circle className={style.option__icon} small />
        <text.P className={style.option__strong} slot='caption' master darker small>{option.display}</text.P>
      </li>
    </Hide>
  </>
