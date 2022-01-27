import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (wheelbase) =>
  <div className={style.wheelbase}>
    <text.Data master darker xs bold>{wheelbase.valor}</text.Data>
    <dl className={style.wheelbase__dl}>
      <text.Dt className={style.wheelbase__text} master darker xxxs medium>Wheelbase</text.Dt>
      <text.Dd className={style.wheelbase__text} master xxxs>Menor distância entre os trucks do shape</text.Dd>
    </dl>
  </div>
