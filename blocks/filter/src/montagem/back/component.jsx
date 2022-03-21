import button from '@kuba/button'
import h from '@kuba/h'
import style from './style'

export default (props) =>
  <section className={style.back}>
    <button.icon.ArrowLeft onClick={props.onClick} />
  </section>
