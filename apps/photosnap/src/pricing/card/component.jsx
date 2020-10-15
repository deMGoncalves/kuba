import h from '@rex/h'
import style from './style.css'

export default (props, child) =>
  <article className={[style.card, style[props.type]]}>
    <header className={style.card__header}>
      <h4 className={style.card__title}>{props.title}</h4>
      <p className={style.card__text}>{child}</p>
    </header>
    <p className={style.card__price}>
      <data className={style.card__value} value={props.price}>$ {props.price}</data> per month
    </p>
    <button className={style.card__button}>Pick Plan</button>
  </article>
