import h from '@kuba/h'
import Avatar from '@kuba/avatar'
import text from '@kuba/text'
import style from './style'

export default (origem) =>
  <span uid='origem' className={style.origem}>
    <Avatar small>
      <source srcSet={origem.url} />
    </Avatar>
    <text.Strong master darker xxxs medium>{origem.valor}</text.Strong>
  </span>
