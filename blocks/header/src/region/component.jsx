import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import text from '@kuba/text'
import style from './style'

export default (props) =>
  <Action className={[style.region, props.className]}>
    <icon.MapMarker className={style.region__icon} alt='Praesent gravida leo' slot='icon' larger />
    <text.P className={style.region__p} slot='label' master darker small>
      Praesent<br /><strong>gravida leo</strong>
    </text.P>
    <Fragment slot='main' />
  </Action>
