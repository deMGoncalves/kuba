import h from '@kuba/h'
import Avatar from '@kuba/avatar'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (origem) =>
  <span uid='origem' className={style.origem}>
    <Avatar small>
      <Show when={origem.url}>
        <source srcSet={origem.url} />
      </Show>
    </Avatar>
    <text.Strong master darker xxxs medium>{origem.valor}</text.Strong>
  </span>
