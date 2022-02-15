import h from '@kuba/h'
import Avatar from '@kuba/avatar'
import text from '@kuba/text'
import style from './style'

export default (origem) =>
  <div className={style.origem} onClick={() => origem.toggle()} selected:isTruthy={origem.selected}>
    <Avatar>
      <source srcSet={origem.url} />
    </Avatar>
    <text.Strong master darker xxxs medium>{origem.valor}</text.Strong>
  </div>
