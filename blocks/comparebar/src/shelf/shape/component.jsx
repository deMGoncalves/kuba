import h, { Fragment } from '@kuba/h'
import Figure from '@kuba/figure'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import style from './style'

export default (shape) =>
  <Figure className={style.shape}>
    <Show when={shape.thumbnail}>
      <source srcSet={shape.thumbnail} slot='sources' />
    </Show>
    <Fragment slot='caption'>
      {shape.tamanho}
      {shape.modelo}
      <button className={style.shape__button} onClick={() => shape.remove()}>
        <icon.Close onColor />
      </button>
    </Fragment>
  </Figure>
