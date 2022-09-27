import { component } from '@kuba/marionette'
import Avatar from '@kuba/avatar'
import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default component((option) => (
  <div className={style.option} onClick={() => option.toggle()} selected={option.selected}>
    <Avatar>
      <source srcSet={option.url} />
    </Avatar>
    <text.Strong master darker xxxs medium>{option.valor}</text.Strong>
  </div>
))
