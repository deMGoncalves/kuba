import h, { Fragment } from '@kuba/h'
import Action from '@kuba/action'
import icon from '@kuba/icon'
import text from '@kuba/text'
import style from './style'

export default (props) =>
  <Action className={[style.region, props.className]}>
    <icon.MapMarker className={style.region__icon} alt='ative ofertas da sua região' slot='icon' larger />
    <text.P className={style.region__p} slot='label' master ligth small>
      ative ofertas<br /><strong>da sua região</strong>
    </text.P>
    <text.Strong className={style.region__strong} slot='header' master darker>ative ofertas da sua região</text.Strong>
    <Fragment slot='main' />
  </Action>
