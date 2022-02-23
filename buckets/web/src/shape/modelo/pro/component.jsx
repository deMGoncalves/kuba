import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (pro) =>
  <text.Strong uid='pro' className={style.pro} are:isTruthy={pro.are} master lightest xxxs medium>Pro Model</text.Strong>
