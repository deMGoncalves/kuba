import h from '@rex/h'
import style from './style.css'

export default (props) =>
  <article className={style.switch}>
    <data value='Monthly' className={[style.switch__text, style.activated]}>Monthly</data>
    <label className={[style.switch__label, props.className]}>
      <input className={style.switch__check} type='checkbox' />
      <span className={style.switch__slider} />
    </label>
    <data value='Yearly' className={style.switch__text}>Yearly</data>
  </article>
