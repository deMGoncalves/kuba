import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (pro) =>
  <text.Strong uid='pro' className={style.pro} are:isTruthy={pro.are} master lightest xxxs medium>Pro Model</text.Strong>
