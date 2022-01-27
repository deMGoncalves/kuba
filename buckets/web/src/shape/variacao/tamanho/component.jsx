import h from '@kuba/h'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <div className={style.tamanho}>
    <text.Data master darker xs bold>{tamanho.valor}</text.Data>
    <dl className={style.tamanho__dl}>
      <text.Dt className={style.tamanho__text} master darker xxxs medium>Tamanho</text.Dt><br />
      <text.Dd className={style.tamanho__text} master xxxs>Medida em polegadas do comprimento de desenvolvido do shape</text.Dd>
    </dl>
  </div>
