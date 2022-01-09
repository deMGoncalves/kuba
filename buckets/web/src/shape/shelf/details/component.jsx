import h from '@kuba/h'
import text from '@kuba/text'
import Show from '@kuba/show'
import style from './style'

export default (details) =>
  <div className={style.details}>
    <text.P className={style.details__paragraph}>
      <Show when={details.description}>
        <text.Strong bold>Detalhes do produto: </text.Strong>
        <span>{details.description}</span>
      </Show>
    </text.P>
    <Show when={details.tamanho}>
      <text.Label>Largura do shape: {details.tamanho}</text.Label>
    </Show>
    <text.Label>Lixa inclusa: {details.lixa}</text.Label>
    <text.Label>Nose: {details.nose}</text.Label>
    <text.Label>Tail: {details.tail}</text.Label>
    <text.Label>Concave: {details.concave}</text.Label>
    <text.Label>Material do Shape: {details.material}</text.Label>
    <text.Label>Fabricação: {details.origem}</text.Label>
  </div>
