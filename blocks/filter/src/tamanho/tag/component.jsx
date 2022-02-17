import h from '@kuba/h'
import Show from '@kuba/show'
import tag from '@kuba/tag'
import text from '@kuba/text'
import style from './style'

export default (props) =>
  <tag.Master className={style.tag} onClick={props.onClick} len:isTruthy={props.len} darker medium>
    Tamanho
    <Show when={props.len}>
      <text.Span master darker xxxs medium>+{props.len}</text.Span>
    </Show>
  </tag.Master>
