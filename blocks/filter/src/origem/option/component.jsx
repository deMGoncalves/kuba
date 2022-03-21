import Avatar from '@kuba/avatar'
import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default (option) =>
  <div className={style.option} onClick={() => option.toggle()} selected:isTruthy={option.selected}>
    <Avatar>
      <source srcSet={option.url} />
    </Avatar>
    <text.Strong master darker xxxs medium>{option.valor}</text.Strong>
  </div>
