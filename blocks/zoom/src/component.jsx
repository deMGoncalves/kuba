import button from '@kuba/button'
import h from '@kuba/h'
import style from './style'

export default (zoom) =>
  <section className={style.zoom} opened:isTruthy={zoom.opened}>
    <button.icon.Close className={style.zoom__button} onClick={() => zoom.close()} />
    <img className={style.zoom__img} src={zoom.src} alt={zoom.alt} />
  </section>
