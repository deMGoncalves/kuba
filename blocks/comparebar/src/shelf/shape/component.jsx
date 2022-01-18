import h, { Fragment } from '@kuba/h'
import icon from '@kuba/icon'
import Picture from '@kuba/picture'
import style from './style'

export default (shape) =>
  <section className={style.shape}>
    <Picture className={style.shape__picture}>
      <source srcSet={shape.thumbnail} slot='sources' />
    </Picture>
    <main className={style.shape__main}>
      {shape.modelo}
      {shape.laminas}
    </main>
    <button className={style.shape__button} onClick={() => shape.remove()}>
      <icon.Close onColor />
    </button>
  </section>
