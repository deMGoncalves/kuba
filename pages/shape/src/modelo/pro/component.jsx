import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (pro) =>
  <text.A uid='pro' className={style.pro} href={pro.href} are:isTruthy={pro.are} master lightest xxxs medium>Pro Model</text.A>
