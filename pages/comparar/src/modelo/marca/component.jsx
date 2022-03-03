import h, { Fragment } from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (marca) =>
  <Fragment uid='marca'>
    <text.Strong className={[style.marca, style[marca.position]]} master darker xxxs medium>{marca.valor}</text.Strong>
  </Fragment>
