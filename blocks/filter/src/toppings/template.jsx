import h, { Fragment } from '@kuba/h'
import style from './style'
import tag from '@kuba/tag'

export default (topping) =>
  <tag.Master className={style.toppings__tag} onClick={() => topping.toggle()} selected:isTruthy={topping.selected} darker medium>
    {topping.nome}
  </tag.Master>
