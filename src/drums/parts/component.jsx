import h from '@h'
import style from './style.css'

const audio = Symbol('audio')

const component = (part) =>
  <section className={[style.part, style[part[audio]]]} onClick_stop={() => part.play()}>
    <kbd className={style.part__key}>{ part.key }</kbd>
    <strong className={style.part__sound}>{ part.sound }</strong>
  </section>

export default component
export {
  audio
}
