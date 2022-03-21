import Avatar from '@kuba/avatar'
import h from '@kuba/h'
import Show from '@kuba/show'
import style from './style'
import text from '@kuba/text'

export default (origem) =>
  <span uid='origem' className={style.origem}>
    <Avatar small>
      <Show when={origem.url}>
        <source srcSet={origem.url} />
      </Show>
    </Avatar>
    <text.Strong master darker xxxs medium>{origem.valor}</text.Strong>
  </span>
