import h from '@kuba/h'
import Show from '@kuba/show'
import style from './style'
import tag from '@kuba/tag'
import text from '@kuba/text'

export default (props) =>
  <tag.Master className={style.tag} onClick={props.onClick} len:isTruthy={props.len} darker medium>
    Montagem
    <Show when={props.len}>
      <text.Span master darker xxxs medium>+{props.len}</text.Span>
    </Show>
  </tag.Master>
