import h from '@kuba/h'
import button from '@kuba/button'
import Picture from '@kuba/picture'
import style from './style'

export default (shape) =>
  <section className={style.shape}>
    <Picture className={style.shape__picture}>
      <source srcSet={shape.thumbnail} slot='sources' />
    </Picture>
    <div className={style.shape__div}>
      {shape.marca}
      {shape.modelo}
      {shape.tamanho}
    </div>
    <button.icon.Close className={style.shape__button} onClick={() => shape.remove()} />
  </section>
