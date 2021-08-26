import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (option) =>
  <>
    <Show when={option.selected}>
      <li className={style.option} onClick={() => option.unselect()}>
        <icon.CircleChecked className={style.option__icon} small />
        <text.P className={style.option__text} slot='caption' master darker xxxs>{option.display}</text.P>
      </li>
    </Show>
    <Hide when={option.selected}>
      <li className={style.option} onClick={() => option.select()}>
        <icon.Circle className={style.option__icon} small />
        <text.P className={style.option__text} slot='caption' master darker xxxs>{option.display}</text.P>
      </li>
    </Hide>
  </>
