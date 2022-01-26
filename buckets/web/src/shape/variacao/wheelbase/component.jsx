import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (wheelbase) =>
  <div className={style.wheelbase}>
    <text.Data master darker md bold>{wheelbase.valor}</text.Data>
    <span className={style.wheelbase__span}>
      <text.Strong className={style.wheelbase__text} master darker xxxs medium>Wheelbase</text.Strong><br />
      <text.Span className={style.wheelbase__text} master xxxs>Menor distância entre os trucks do shape</text.Span>
    </span>
  </div>
