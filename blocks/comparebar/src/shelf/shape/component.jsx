import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import Picture from '@kuba/picture'
import style from './style'

export default (shape) =>
  <section className={style.shape}>
    <Picture className={style.shape__picture}>
      <source srcSet={shape.thumbnail} slot='sources' />
    </Picture>
    <div className={style.shape__div}>
      {shape.modelo}
      {shape.laminas}
    </div>
    <button className={style.shape__button} onClick={() => shape.remove()}>
      <icon.Close onColor />
    </button>
  </section>
