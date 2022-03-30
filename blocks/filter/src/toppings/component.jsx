import Concave from './concave'
import h from '@kuba/h'
import Nose from './nose'
import Pro from './pro'
import style from './style'
import Tail from './tail'
import Wells from './wells'

export default () =>
  <div className={style.toppings}>
    <Pro />
    <Nose />
    <Tail />
    <Concave />
    <Wells />
  </div>
