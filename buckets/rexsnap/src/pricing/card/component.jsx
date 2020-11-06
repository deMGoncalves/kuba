import h from '@rex/h'
import style from './style.css'

export default (props, children) =>
  <div className={[style.card, style[props.type], props.className, 'rainbowBar']}>
    <header className={style.card__header}>
      <em className={style.card__title}>{props.title}</em>
      <p className={style.card__text}>{children}</p>
    </header>
    <p className={style.card__price}>
      <data className={style.card__dataMonth} value={props.priceMonth}>
        <em className={style.card__month}>$ {props.priceMonth}</em> per month
      </data>
      <data className={style.card__dataYear} value={props.priceYear}>
        <em className={style.card__year}>$ {props.priceYear}</em> per year
      </data>
    </p>
    <button className={style.card__button}>Pick Plan</button>
  </div>
