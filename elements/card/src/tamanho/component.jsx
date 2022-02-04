import h from '@kuba/h'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (tamanho) =>
  <div className={style.tamanho}>
    <text.Data className={style.tamanho__data} master darker xs medium>{tamanho.valor}</text.Data>
    <icon.ArrowLongRight small />
    <text.Data className={style.tamanho__data} master darker xs medium>
      {tamanho.wheelbase}
      <Show when={tamanho.wheelbase}>
        <text.Stub master darker xxxs> wb</text.Stub>
      </Show>
    </text.Data>
  </div>
