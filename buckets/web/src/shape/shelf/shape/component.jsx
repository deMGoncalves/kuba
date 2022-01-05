import h, { Fragment } from '@kuba/h'
import Figure from '@kuba/figure'
import Show from '@kuba/show'
import style from './style'

export default (shape) =>
  <Figure className={style.shape}>
    <Show when={shape.logo}>
      <source srcSet={shape.logo} slot='sources' />
    </Show>
    <Fragment slot='caption'>
      {shape.tamanho}
      {shape.modelo}
    </Fragment>
  </Figure>
