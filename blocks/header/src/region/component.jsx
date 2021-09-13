import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import text from '@kuba/text'
import Widget from '@kuba/header/src/widget'
import style from './style'

export default (props) =>
  <Widget className={[style.region, props.className]}>
    <icon.MapMarker className={style.region__icon} alt='Praesent gravida leo' slot='icon' larger />
    <text.P className={style.region__p} slot='label' master darker xxxs>
      Praesent<br /><strong>gravida leo</strong>
    </text.P>
    <Fragment slot='main' />
  </Widget>
