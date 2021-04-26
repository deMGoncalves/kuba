import h from '@kuba/h'
import Site from '@kuba/site'
import Cite from './cite'
import Description from './description'
import Summary from './summary'
import style from './style.css'

export default () =>
  <Site className={style.home}>
    <Cite className={style.home__cite} />
    <Summary className={style.home__summary} />
    <Description className={style.home__description} />
  </Site>
