import Concave from './concave'
import h from '@kuba/h'
import Nose from './nose'
import Pro from './pro'
import style from './style'
import Tail from './tail'

export default () =>
  <div className={style.toppings}>
    <Pro />
    <Nose />
    <Tail />
    <Concave />
  </div>
