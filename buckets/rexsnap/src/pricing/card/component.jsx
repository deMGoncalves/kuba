import h, { Show } from '@rex/h'
import * as ui from '@ui'
import style from './style.css'

export default (card) =>
  <div className={[style.card, style[card.type], card.className]}>
    <Show if={card.type}>
      <ui.Gradient className={style.card__gradient} />
    </Show>

    <header className={style.card__header}>
      <em className={style.card__name}>{card.name}</em>
      <p className={style.card__description}>{card.description}</p>
    </header>

    <data className={style.card__price} value={card.price}>
      <em className={style.card__label}>{card.price}</em> per {card.plan}
    </data>

    <ui.Button className={style.card__button} type={card.type}>Pick Plan</ui.Button>
  </div>
