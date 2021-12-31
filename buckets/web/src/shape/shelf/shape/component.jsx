import h, { Fragment } from '@kuba/h'
import Figure from '@kuba/figure'
import text from '@kuba/text'

export default (shape) =>
  <Figure>
    <Fragment slot='caption'>
      <text.Strong master darker xxs medium>{shape.modelo}</text.Strong>
    </Fragment>
  </Figure>
