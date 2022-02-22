import h from '@kuba/h'
import Avatar from '@kuba/avatar'
import text from '@kuba/text'
import style from './style'

export default (option) =>
  <div className={style.option} onClick={() => option.toggle()} selected:isTruthy={option.selected}>
    <Avatar>
      <source srcSet={option.url} />
    </Avatar>
    <text.Strong master darker xxxs medium>{option.valor}</text.Strong>
  </div>
