import h from '@kuba/h'
import style from './style'

export default (props) =>
  <figure className={style.shelf__picture}>
    <img srcSet={props.image}/>
  </figure>
