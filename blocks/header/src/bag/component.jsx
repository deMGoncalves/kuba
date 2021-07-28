import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import text from '@kuba/text'
import style from './style'

export default (props) =>
  <Action className={[style.bag, props.className]}>
    <icon.Bag className={style.bag__icon} alt='sacola' slot='icon' larger />
    <text.Strong className={style.bag__text} slot='header' master darker>sacola</text.Strong>
    <Fragment slot='main' />
  </Action>
