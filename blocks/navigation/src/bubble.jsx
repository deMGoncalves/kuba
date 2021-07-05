import h from '@kuba/h'
import { urlFor } from '@kuba/router'
import Bubble from '@kuba/bubble'
import text from '@kuba/text'
import style from './style.css'

export default (props) =>
  <Bubble className={style.navigation__bubble} onClick={() => location.assign(urlFor('category', props.universe, props.category))}>
    <source srcSet={props.thumbnail} slot='sources' />
    <text.Strong className={style.navigation__strong} slot='caption' master darker>{props.title}</text.Strong>
  </Bubble>
