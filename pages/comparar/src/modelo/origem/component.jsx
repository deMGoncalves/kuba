import Avatar from '@kuba/avatar'
import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (origem) =>
  <span uid='origem' className={[style.origem, style[origem.position]]}>
    <Avatar small>
      <source srcSet={origem.url} />
    </Avatar>
    <text.Strong master darker xxxs medium>{origem.valor}</text.Strong>
  </span>
