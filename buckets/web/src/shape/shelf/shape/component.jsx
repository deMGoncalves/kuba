import h, { Fragment } from '@kuba/h'
import Figure from '@kuba/figure'
import text from '@kuba/text'
import style from './style'

export default (shape) =>
  <Figure className={style.shape}>
    <Fragment slot='caption'>
      <text.Span className={style.shape__span} master darker xxxs bold>{shape.tamanho} &quot;</text.Span>
      <text.Strong master darker xxxs medium>{shape.modelo}</text.Strong>
    </Fragment>
  </Figure>
