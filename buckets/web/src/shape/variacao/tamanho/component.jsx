import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <div className={style.tamanho}>
    <text.Data master darker md bold>{tamanho.valor}</text.Data>
    <span className={style.tamanho__span}>
      <text.Strong className={style.tamanho__text} master darker xxxs medium>Tamanho</text.Strong><br />
      <text.Span className={style.tamanho__text} master xxxs>Medida em polegadas do comprimento de desenvolvido do shape</text.Span>
    </span>
  </div>
