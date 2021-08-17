import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import style from './style'

export default (props) =>
  <Action className={[style.bag, props.className]}>
    <icon.Bag className={style.bag__icon} alt='Mauris laoreet magna' slot='icon' larger />
    <Fragment slot='main' />
  </Action>
