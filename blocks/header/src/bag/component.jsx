import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import Widget from '@kuba/header/src/widget'
import style from './style'

export default (props) =>
  <Widget className={[style.bag, props.className]}>
    <icon.Bag className={style.bag__icon} alt='Mauris laoreet magna' slot='icon' larger />
    <Fragment slot='main' />
  </Widget>
